import { cloneDeep, uniq } from "@virtahealth/utils";
import {
  CommunityComment,
  CommunityPost,
  CommunityTopic,
  CommunityUser,
} from "../../types";
import {
  AUTHORS_RECEIVED,
  AUTHOR_UPDATED,
  COMMENTS_RECEIVED,
  COMMENT_CREATED,
  COMMENT_DELETED,
  COMMENT_LIKED,
  COMMENT_UNLIKED,
  COMMENT_UPDATED,
  POSTS_RECEIVED,
  POST_CREATED,
  POST_DELETED,
  POST_LIKED,
  POST_UNLIKED,
  POST_UPDATED,
  TOPICS_RECEIVED,
} from "./actionTypes";
import { keyByAuthorId } from "./utils";

interface ByIdState<T> {
  allIds: number[];
  byId: { [id: number]: T };
}

export interface PostState extends ByIdState<CommunityPost> {
  byTopicId: { [id: number]: CommunityPost["id"][] };
  byAuthorId: { [id: number]: CommunityPost["id"][] };
}

export interface CommentState extends ByIdState<CommunityComment> {
  byAuthorId: { [id: number]: CommunityComment["id"][] };
}

export interface CommunityState {
  topics: ByIdState<CommunityTopic>;
  posts: PostState;
  comments: CommentState;
  authors: ByIdState<CommunityUser>;
}

export const initialState = {
  topics: {
    allIds: [],
    byId: {},
  },
  posts: {
    allIds: [],
    byId: {},
    byTopicId: {},
    byAuthorId: {},
  },
  comments: {
    allIds: [],
    byId: {},
    byAuthorId: {},
  },
  authors: {
    allIds: [],
    byId: {},
  },
};

export function PostReducer(
  state: PostState,
  action: { type: string; payload?: any; metadata?: any }
) {
  switch (action.type) {
    case POSTS_RECEIVED: {
      const {
        result,
        entities: { posts },
      } = action.payload;
      // byTopic
      const postsByTopic = Object.keys(posts).reduce((acc, postId) => {
        const topicId = posts[postId].topic_id;
        // @ts-ignore - type this
        const currentPostIdsByTopic = acc[topicId] ?? [];
        if (!currentPostIdsByTopic.includes(postId)) {
          return { ...acc, [topicId]: [...currentPostIdsByTopic, postId] };
        }
        return { ...acc, [topicId]: currentPostIdsByTopic };
      }, {});

      return {
        byId: { ...state.byId, ...posts },
        allIds: uniq([...state.allIds, ...result]),
        byTopicId: postsByTopic,
        byAuthorId: keyByAuthorId(state, posts),
      };
    }
    case POST_DELETED: {
      const { postId } = action.metadata;
      const { byId, allIds, byTopicId, byAuthorId } = state;
      const filteredAllIds = allIds.filter((id) => id !== postId);
      // byId
      const filteredPostsById = Object.keys(byId).reduce((acc, id) => {
        if (String(id) !== String(postId)) {
          // @ts-ignore - type this
          return { ...acc, [id]: byId[id] };
        }
        return acc;
      }, {});
      // byTopicId
      const filteredByTopicIds = Object.keys(byTopicId).reduce(
        (acc, topicId) => {
          // @ts-ignore - type this
          const postIdsForTopic = byTopicId[topicId];
          if (!postIdsForTopic.includes(postId)) {
            return { ...acc, [topicId]: postIdsForTopic };
          }
          const filteredPostIds = postIdsForTopic.filter(
            (p: number) => p !== postId
          );
          return { ...acc, [topicId]: filteredPostIds };
        },
        {}
      );
      // byAuthorId
      const filteredByAuthorIds = Object.keys(byAuthorId).reduce(
        (acc, authorId) => {
          // @ts-ignore - type this
          const postIdsForAuthor = byAuthorId[authorId];
          if (!postIdsForAuthor.includes(postId)) {
            return { ...acc, [authorId]: postIdsForAuthor };
          }
          // @ts-ignore - type this
          const filteredPostIds = postIdsForAuthor.filter((p) => p !== postId);
          return { ...acc, [authorId]: filteredPostIds };
        },
        {}
      );
      return {
        byId: filteredPostsById,
        allIds: filteredAllIds,
        byTopicId: filteredByTopicIds,
        byAuthorId: filteredByAuthorIds,
      };
    }
    case POST_CREATED:
    case POST_UPDATED:
    case POST_LIKED:
    case POST_UNLIKED: {
      const {
        payload: {
          result,
          entities: { posts },
        },
      } = action;
      const { byId, allIds, byTopicId } = state;
      const { topic_id } = posts[result];
      const updatedByTopicId = byTopicId;
      // update byTopicId
      if (updatedByTopicId[topic_id]) {
        if (!updatedByTopicId[topic_id].includes(result)) {
          updatedByTopicId[topic_id] = [...updatedByTopicId[topic_id], result];
        }
      } else {
        updatedByTopicId[topic_id] = [result];
      }

      return {
        byId: { ...byId, ...posts },
        allIds: uniq([...allIds, result]),
        byTopicId: updatedByTopicId,
        byAuthorId: keyByAuthorId(state, posts),
      };
    }

    case COMMENTS_RECEIVED: {
      const { byId } = state;
      const { postId } = action.metadata;
      const newPostCommentIds = byId[postId] ? [...byId[postId].comments] : [];
      action.payload.result.forEach((commentId: number) => {
        if (!newPostCommentIds.includes(commentId)) {
          newPostCommentIds.push(commentId);
        }
      });

      const updatedPostsById = byId;
      updatedPostsById[postId].comments = newPostCommentIds;
      return {
        ...state,
        byId: updatedPostsById,
      };
    }

    case COMMENT_DELETED: {
      // Update comment ids in post
      const {
        payload: {
          result: commentId,
          entities: { comments },
        },
      } = action;
      const deletedComment = comments[commentId];
      const postId = deletedComment.post_id;
      const { byId } = state;
      const updatedPostsById = byId;
      updatedPostsById[postId].comments = updatedPostsById[
        postId
      ].comments.filter((cId) => cId !== commentId);
      return { ...state, byId: { ...updatedPostsById } };
    }
    case COMMENT_UPDATED:
    case COMMENT_CREATED:
    case COMMENT_LIKED:
    case COMMENT_UNLIKED: {
      const {
        payload: { entities, result },
      } = action;
      const newComment = entities.comments[result];
      const { post_id } = newComment;
      const post = state.byId[post_id];
      // Add reference in post if not already present

      if (post.comments.includes(newComment.id)) {
        return state; // Don't need to update refs
      }

      const updatedById = cloneDeep(state.byId);
      const { comments } = updatedById[post_id];
      comments.push(newComment.id);

      return {
        ...state,
        byId: updatedById,
      };
    }

    default:
      return state;
  }
}

export function CommentReducer(
  state: CommentState,
  action: { type: string; payload?: any; metadata?: any }
) {
  switch (action.type) {
    // NOTE: The API call that returns the comments is actually a GET for a specific CommunityPost
    case COMMENTS_RECEIVED: {
      const { byId, allIds } = state;
      const {
        result,
        entities: { comments },
      } = action.payload;

      return {
        byId: { ...byId, ...comments },
        allIds: uniq([...allIds, ...result]),
        byAuthorId: keyByAuthorId(state, comments),
      };
    }
    case COMMENT_DELETED: {
      const {
        payload: {
          result: commentId,
          entities: { comments },
        },
      } = action;
      const { byId, allIds, byAuthorId } = state;
      const deletedComment = comments[commentId];
      const authorId = deletedComment.author;
      const filteredAllIds = allIds.filter((id) => id !== commentId);

      // byId
      const filteredCommentsById = Object.keys(byId).reduce((acc, id) => {
        if (String(id) !== String(commentId)) {
          // @ts-ignore - type this
          return { ...acc, [id]: byId[id] };
        }
        return acc;
      }, {});

      return {
        byId: filteredCommentsById,
        allIds: filteredAllIds,
        byAuthorId: {
          ...byAuthorId,
          [authorId]: byAuthorId[authorId].filter((cId) => cId !== commentId),
        },
      };
    }
    case COMMENT_UPDATED:
    case COMMENT_CREATED:
    case COMMENT_LIKED:
    case COMMENT_UNLIKED: {
      const {
        payload: {
          entities: { comments },
          result,
        },
      } = action;
      const { allIds, byId } = state;

      return {
        byId: { ...byId, ...comments },
        allIds: uniq([...allIds, result]),
        byAuthorId: keyByAuthorId(state, comments),
      };
    }
    default:
      return state;
  }
}

export function TopicReducer(
  state: ByIdState<CommunityTopic>,
  action: { type: string; payload?: any; metadata?: any }
) {
  switch (action.type) {
    case TOPICS_RECEIVED:
      return {
        byId: action.payload.entities.topics,
        allIds: action.payload.result,
      };
    default:
      return state;
  }
}

export function AuthorReducer(
  state: ByIdState<CommunityUser>,
  action: { type: string; payload?: any; metadata?: any }
) {
  switch (action.type) {
    case AUTHORS_RECEIVED: {
      const { byId, allIds } = state;
      const {
        result,
        entities: { authors },
      } = action.payload;

      return {
        byId: { ...byId, ...authors },
        allIds: uniq([...allIds, ...result]),
      };
    }
    case AUTHOR_UPDATED:
      // eslint-disable-next-line no-case-declarations
      const {
        payload: { entities, result },
      } = action;

      return {
        ...state,
        byId: {
          ...state.byId,
          [result]: entities.authors[result],
        },
      };
    default:
      return state;
  }
}

export const CommunityReducer = (
  state: CommunityState,
  action: { type: string; payload?: any; metadata?: any }
) => {
  const { posts, comments, topics, authors } = state;
  return {
    posts: PostReducer(posts, action),
    comments: CommentReducer(comments, action),
    topics: TopicReducer(topics, action),
    authors: AuthorReducer(authors, action),
  };
};
