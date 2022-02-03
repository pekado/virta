import { cloneDeep } from "@virtahealth/utils";
import {
  AUTHORS_RECEIVED,
  AUTHOR_UPDATED,
  COMMENTS_RECEIVED,
  COMMENT_CREATED,
  COMMENT_DELETED,
  COMMENT_LIKED,
  POSTS_RECEIVED,
  POST_CREATED,
  POST_DELETED,
  POST_UPDATED,
  TOPICS_RECEIVED,
} from "../actionTypes";
import {
  PostReducer,
  CommentReducer,
  TopicReducer,
  initialState,
  AuthorReducer,
  CommunityReducer,
} from "../reducer";
import {
  normalizeAuthor,
  normalizeAuthors,
  normalizeComment,
  normalizeComments,
  normalizePost,
  normalizePosts,
  normalizeTopics,
} from "../schema";
import {
  mappedMockCommunityComments,
  mappedMockCommunityPosts,
  mappedMockCommunityTopics,
  mockCommunityComments,
  mockCommunityPosts,
} from "./mock_data";

describe("CommunityReducer", () => {
  const post = mappedMockCommunityPosts[0];
  const initialStateWithExistingPost = {
    ...initialState,
    posts: {
      allIds: [post.id],
      byId: { [post.id]: post },
      byTopicId: { [post.topic_id]: [post.id] },
      byAuthorId: { [post.author]: [post.id] },
    },
  };

  const comments = mappedMockCommunityComments;
  const initialStateWithExistingComments = {
    allIds: comments.map((c) => c.id),
    byId: comments.reduce((acc, c) => ({ ...acc, [c.id]: c }), {}),
    byAuthorId: comments.reduce<{ [key: number]: number[] }>((acc, c) => {
      if (!(c.author in acc)) {
        return { ...acc, [c.author]: [c.id] };
      }

      return {
        ...acc,
        [c.author]: [...acc[c.author], c.id],
      };
    }, {}),
  };

  it("handles action that is processed by 2 separate reducers", () => {
    const removedComment = comments[1];
    const { allIds, byId, byAuthorId } = initialStateWithExistingComments;
    const initialCommunityState = {
      ...initialState,
      posts: {
        allIds: [post.id],
        byId: {
          [post.id]: {
            ...post,
            comments: mappedMockCommunityComments.map((c) => c.id),
          },
        },
        byTopicId: { [post.topic_id]: [post.id] },
        byAuthorId: { [post.author]: [post.id] },
      },
      comments: initialStateWithExistingComments,
    };

    const updatedCommentsById = Object.keys(byId).reduce(
      (acc, cId) =>
        String(cId) !== String(removedComment.id)
          ? // @ts-ignore - need to type the byId object
            { ...acc, [cId]: byId[cId] }
          : acc,
      {}
    );

    const updatedPost = {
      ...post,
      comments: allIds.filter((id) => removedComment.id !== id),
    };

    const mock = CommunityReducer(initialCommunityState, {
      type: COMMENT_DELETED,
      payload: normalizeComment(removedComment),
    });

    expect(mock).toEqual({
      ...initialCommunityState,
      comments: {
        allIds: allIds.filter((cId) => cId !== removedComment.id),
        byId: updatedCommentsById,
        byAuthorId: {
          ...byAuthorId,
          [removedComment.author]: byAuthorId[removedComment.author].filter(
            (cId) => cId !== removedComment.id
          ),
        },
      },
      posts: {
        ...initialStateWithExistingPost.posts,
        byId: { [updatedPost.id]: updatedPost },
      },
    });
  });

  describe("PostReducer", () => {
    it("receives and normalizes posts", () => {
      const mock = PostReducer(initialState.posts, {
        type: POSTS_RECEIVED,
        payload: normalizePosts(mappedMockCommunityPosts),
      });

      expect(mock).toEqual({
        allIds: mappedMockCommunityPosts.map((p) => p.id),
        byId: mappedMockCommunityPosts.reduce(
          (acc, p) => ({ ...acc, [p.id]: p }),
          {}
        ),
        byTopicId: mappedMockCommunityPosts.reduce(
          (acc, p) =>
            // @ts-ignore - type this
            acc[p.topic_id]
              ? // @ts-ignore - type this
                acc[p.topic_id].push(String(p.id))
              : { ...acc, [p.topic_id]: [String(p.id)] },
          {}
        ),
        byAuthorId: mappedMockCommunityPosts.reduce(
          (acc, p) =>
            // @ts-ignore - type this
            acc[p.author]
              ? // @ts-ignore - type this
                acc[p.author].push(p.id)
              : { ...acc, [p.author]: [p.id] },
          {}
        ),
      });
    });

    it("removes post from state when deleted", () => {
      const mock = PostReducer(initialStateWithExistingPost.posts, {
        type: POST_DELETED,
        metadata: { postId: post.id },
      });

      expect(mock).toEqual({
        allIds: [],
        byId: {},
        byTopicId: { [post.topic_id]: [] },
        byAuthorId: { [post.author]: [] },
      });
    });

    it("adds post to state when created", () => {
      const initialPostState = {
        allIds: [post.id],
        byId: { [post.id]: post },
        byTopicId: { [post.topic_id]: [post.id] },
        byAuthorId: { [post.author]: [post.id] },
      };

      const newPost = cloneDeep(post);
      newPost.id = 99;
      const mock = PostReducer(initialPostState, {
        type: POST_CREATED,
        metadata: { postId: newPost.id },
        payload: normalizePost(newPost),
      });

      expect(mock).toEqual({
        allIds: [post.id, newPost.id],
        byId: { [post.id]: post, [newPost.id]: newPost },
        byTopicId: { [post.topic_id]: [post.id, newPost.id] },
        byAuthorId: { [post.author]: [post.id, newPost.id] },
      });
    });

    it("updates post in state", () => {
      const updatedPost = {
        ...post,
        body: "This is an updated post.",
      };

      const mock = PostReducer(initialStateWithExistingPost.posts, {
        type: POST_UPDATED,
        metadata: { postId: updatedPost.id },
        payload: normalizePost(updatedPost),
      });

      expect(mock).toEqual({
        allIds: [post.id],
        byId: { [post.id]: updatedPost },
        byTopicId: { [post.topic_id]: [updatedPost.id] },
        byAuthorId: { [post.author]: [updatedPost.id] },
      });
    });

    it("updates comment refs for a post when comment is deleted", () => {
      const removedComment = mappedMockCommunityComments[1];
      const initialPosts = {
        ...initialStateWithExistingPost.posts,
        byId: {
          [post.id]: {
            ...post,
            comments: mappedMockCommunityComments.map((comment) => comment.id),
          },
        },
      };

      const mock = PostReducer(initialPosts, {
        type: COMMENT_DELETED,
        payload: normalizeComment(removedComment),
      });

      expect(mock).toEqual({
        ...initialPosts,
        byId: {
          [post.id]: {
            ...post,
            comments: mappedMockCommunityComments.reduce(
              // @ts-ignore - type this
              (acc, c) => (c === removedComment ? acc : [...acc, c.id]),
              []
            ),
          },
        },
      });
    });

    it("updates comment refs for a post when comment is created", () => {
      const [existingComment, newComment] = mappedMockCommunityComments.slice(
        0,
        2
      );
      const initialPosts = {
        ...initialStateWithExistingPost.posts,
        byId: {
          [post.id]: {
            ...post,
            comments: [existingComment.id],
          },
        },
      };

      const mock = PostReducer(initialPosts, {
        type: COMMENT_CREATED,
        payload: normalizeComment(newComment),
      });

      expect(mock).toEqual({
        ...initialPosts,
        byId: {
          [post.id]: { ...post, comments: [existingComment.id, newComment.id] },
        },
      });
    });
  });

  describe("CommentReducer", () => {
    it("receives and normalizes comments, updates post with references to comments", () => {
      const mock = CommentReducer(initialState.comments, {
        type: COMMENTS_RECEIVED,
        metadata: { postId: post.id },
        payload: normalizeComments(comments),
      });

      expect(mock).toEqual(initialStateWithExistingComments);
    });

    it("removes comment from state and post when deleted", () => {
      const removedComment = comments[1];
      const { allIds, byId, byAuthorId } = initialStateWithExistingComments;

      const updatedCommentsById = Object.keys(byId).reduce(
        (acc, cId) =>
          String(cId) !== String(removedComment.id)
            ? // @ts-ignore - type this
              { ...acc, [cId]: byId[cId] }
            : acc,
        {}
      );

      const mock = CommentReducer(initialStateWithExistingComments, {
        type: COMMENT_DELETED,
        payload: normalizeComment(removedComment),
      });

      expect(mock).toEqual({
        allIds: allIds.filter((cId) => cId !== removedComment.id),
        byId: updatedCommentsById,
        byAuthorId: {
          ...byAuthorId,
          [removedComment.author]: byAuthorId[removedComment.author].filter(
            (cId) => cId !== removedComment.id
          ),
        },
      });
    });

    it("adds comment to state when created", () => {
      const [existingComment, comment] = comments.slice(0, 2);
      const mock = CommentReducer(
        {
          allIds: [existingComment.id],
          byId: { [existingComment.id]: existingComment },
          byAuthorId: { [existingComment.author]: [existingComment.id] },
        },
        {
          type: COMMENT_CREATED,
          payload: normalizeComment(comment),
        }
      );

      expect(mock).toEqual({
        allIds: initialStateWithExistingComments.allIds.slice(0, -1),
        byId: { [existingComment.id]: existingComment, [comment.id]: comment },
        byAuthorId: {
          [existingComment.author]: [existingComment.id, comment.id],
        },
      });
    });

    it("updates comment in state", () => {
      const existingComment = comments[0];
      const updatedComment = {
        ...existingComment,
        like_count: 20,
        liked: true,
      };

      const mock = CommentReducer(
        {
          allIds: [existingComment.id],
          byId: { [existingComment.id]: existingComment },
          byAuthorId: { [existingComment.author]: [existingComment.id] },
        },
        {
          type: COMMENT_LIKED,
          payload: normalizeComment(updatedComment),
        }
      );

      expect(mock).toEqual({
        allIds: [existingComment.id],
        byId: { [existingComment.id]: updatedComment },
        byAuthorId: { [existingComment.author]: [updatedComment.id] },
      });
    });
  });

  describe("TopicReducer", () => {
    it("receives and normalizes topics", () => {
      const mock = TopicReducer(initialState.topics, {
        type: TOPICS_RECEIVED,
        payload: normalizeTopics(mappedMockCommunityTopics),
      });

      expect(mock).toEqual({
        allIds: mappedMockCommunityTopics.map((t) => t.id),
        byId: mappedMockCommunityTopics.reduce(
          (acc, t) => ({ ...acc, [t.id]: t }),
          {}
        ),
      });
    });
  });

  describe("AuthorReducer (CommunityUsers)", () => {
    it("receives and normalizes authors", () => {
      const authors = [
        mockCommunityPosts[0].author,
        ...mockCommunityComments.map((c) => c.author),
      ];
      const mock = AuthorReducer(initialState.authors, {
        type: AUTHORS_RECEIVED,
        payload: normalizeAuthors(authors),
      });

      expect(mock).toEqual({
        allIds: authors.reduce((acc: number[], a) => {
          if (acc.includes(a.id)) {
            return acc;
          }
          return [...acc, a.id];
        }, []),
        byId: authors.reduce((acc, a) => ({ ...acc, [a.id]: a }), {}),
      });
    });

    it("updates author in state", () => {
      const existingAuthor = mockCommunityPosts[0].author;
      const updatedAuthor = {
        ...existingAuthor,
        display_name: "New Display Name",
      };

      const mock = AuthorReducer(
        {
          allIds: [existingAuthor.id],
          byId: { [existingAuthor.id]: existingAuthor },
        },
        {
          type: AUTHOR_UPDATED,
          payload: normalizeAuthor(updatedAuthor),
        }
      );

      expect(mock).toEqual({
        allIds: [existingAuthor.id],
        byId: { [existingAuthor.id]: updatedAuthor },
      });
    });
  });
});
