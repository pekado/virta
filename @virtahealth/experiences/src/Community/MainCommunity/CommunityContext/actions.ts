import { VirtaClient } from "@virtahealth/components";
import {
  CommunityComment,
  CommunityPost,
  CreateCommentPayload,
  CreatePostPayload,
  UpdateCommentPayload,
  UpdateCommunityUserPayload,
  UpdatePostPayload,
} from "../../types";

import {
  COMMENT_CREATED,
  COMMENT_UPDATED,
  COMMENT_DELETED,
  COMMENT_LIKED,
  COMMENT_UNLIKED,
  POST_CREATED,
  POST_DELETED,
  POST_LIKED,
  POST_UNLIKED,
  POST_UPDATED,
  POSTS_RECEIVED,
  COMMENTS_RECEIVED,
  TOPICS_RECEIVED,
  AUTHORS_RECEIVED,
  AUTHOR_UPDATED,
} from "./actionTypes";

import { transformComment, transformPost, transformTopic } from "./api";

import {
  normalizeAuthor,
  normalizeAuthors,
  normalizeComment,
  normalizeComments,
  NormalizedAuthors,
  NormalizedComments,
  NormalizedPosts,
  NormalizedTopics,
  normalizePost,
  normalizePosts,
  normalizeTopics,
} from "./schema";

import {
  communityCommentUrl,
  communityFeedUrl,
  communityLikeUrl,
  communityPostUrl,
  communityTopicsUrl,
  communityUserUrl,
} from "./urls";

export type FetchedDataActionType =
  | {
      type: typeof POSTS_RECEIVED;
      payload: NormalizedPosts;
    }
  | {
      type: typeof COMMENTS_RECEIVED;
      metadata: { postId: number };
      payload: NormalizedComments;
    }
  | {
      type: typeof TOPICS_RECEIVED;
      payload: NormalizedTopics;
    }
  | {
      type: typeof AUTHORS_RECEIVED;
      payload: NormalizedAuthors;
    };

export interface PostActionType {
  type:
    | typeof POST_CREATED
    | typeof POST_UPDATED
    | typeof POST_DELETED
    | typeof POST_LIKED
    | typeof POST_UNLIKED;
  payload: NormalizedPosts;
}

export interface CommentActionType {
  type:
    | typeof COMMENT_CREATED
    | typeof COMMENT_UPDATED
    | typeof COMMENT_DELETED
    | typeof COMMENT_LIKED
    | typeof COMMENT_UNLIKED;
  payload: NormalizedComments;
}

// POSTS_RECEIVED
// @ts-ignore - type this
export const fetchPosts = (client: VirtaClient, dispatch, page = 1) =>
  // @ts-ignore - type this
  client.get(`${communityFeedUrl}/${page}`).then((resp: { data: any }) => {
    // @ts-ignore - type this
    const posts = resp.data.map((p) => transformPost(p));
    dispatch({
      type: POSTS_RECEIVED,
      payload: normalizePosts(posts),
    });
    dispatch({
      type: AUTHORS_RECEIVED,
      // @ts-ignore - type this
      payload: normalizeAuthors(resp.data.map((p) => p.author)),
    });
  });

export const fetchPostsForTopic = (
  client: VirtaClient,
  // @ts-ignore - type this
  dispatch,
  topicId: number,
  page = 1
) =>
  client
    .get(`${communityTopicsUrl}/${topicId}/${page}`)
    // @ts-ignore - type this
    .then((resp: any) => resp.data.map((p) => transformPost(p)))
    .then((posts) => {
      dispatch({
        type: POSTS_RECEIVED,
        payload: normalizePosts(posts),
      });
      dispatch({
        type: AUTHORS_RECEIVED,
        // @ts-ignore - type this
        payload: normalizeAuthors([...posts.map((p) => p.author)]),
      });
    });

// @ts-ignore - type this
export const fetchExpandedPost = (client: VirtaClient, dispatch, postId) =>
  client.get(`${communityPostUrl}/${postId}`).then((data: any) => {
    const post = transformPost(data, true);
    dispatch({
      type: POSTS_RECEIVED,
      payload: normalizePost(post),
    });
    dispatch({
      type: COMMENTS_RECEIVED,
      metadata: { postId },
      payload: normalizeComments(data.comments),
    });
    dispatch({
      type: AUTHORS_RECEIVED,
      payload: normalizeAuthors([
        data.author,
        // @ts-ignore - type this
        ...data.comments.map((c) => c.author),
      ]),
    });
  });

// POST_CREATED
export const createPost = (
  client: VirtaClient,
  // @ts-ignore - type this
  dispatch,
  postData: CreatePostPayload
) =>
  client.post(communityPostUrl, postData).then((data) => {
    const post = transformPost(data);
    dispatch({
      type: POST_CREATED,
      payload: normalizePost(post),
    });
  });

// POST_UPDATED
export const updatePost = (
  client: VirtaClient,
  // @ts-ignore - type this
  dispatch,
  postData: UpdatePostPayload
) =>
  client.patch(communityPostUrl, postData).then((data) => {
    const post = transformPost(data);
    dispatch({
      type: POST_UPDATED,
      payload: normalizePost(post),
    });
  });

// POST_DELETED
// @ts-ignore - type this
export const deletePost = (client: VirtaClient, dispatch, postId: number) =>
  client.delete(`${communityPostUrl}/${postId}`).then(() => {
    dispatch({
      type: POST_DELETED,
      metadata: { postId },
    });
  });

// POST_LIKED
// @ts-ignore - type this
export const postLike = (client: VirtaClient, dispatch, post: CommunityPost) =>
  client
    .post(communityLikeUrl, {
      post_id: post.id,
    })
    .then(() => {
      const updatedPost = toggleLikeOnPostOrComment(post);
      dispatch({
        type: POST_LIKED,
        payload: normalizePost(updatedPost),
      });
    });

// POST_UNLIKED
export const postUnlike = (
  client: VirtaClient,
  // @ts-ignore - type this
  dispatch,
  post: CommunityPost
) =>
  client
    .delete(communityLikeUrl, {
      post_id: post.id,
    })
    .then(() => {
      const updatedPost = toggleLikeOnPostOrComment(post);
      dispatch({
        type: POST_UNLIKED,
        payload: normalizePost(updatedPost),
      });
    });

// COMMENT_CREATED
export const createComment = (
  client: VirtaClient,
  // @ts-ignore - type this
  dispatch,
  commentData: CreateCommentPayload
) =>
  client.post(communityCommentUrl, commentData).then((data) => {
    const comment = transformComment(data);
    dispatch({
      type: COMMENT_CREATED,
      payload: normalizeComment(comment),
    });
  });

// COMMENT_UPDATED
export const updateComment = (
  client: VirtaClient,
  // @ts-ignore - type this
  dispatch,
  commentData: UpdateCommentPayload
) =>
  client.patch(communityCommentUrl, commentData).then((data) => {
    const comment = transformComment(data);
    dispatch({
      type: COMMENT_UPDATED,
      payload: normalizeComment(comment),
    });
  });

// COMMENT_DELETED
export const deleteComment = (
  client: VirtaClient,
  // @ts-ignore - type this
  dispatch,
  comment: CommunityComment
) =>
  client.delete(`${communityCommentUrl}/${comment.id}`).then(() => {
    dispatch({
      type: COMMENT_DELETED,
      payload: normalizeComment(comment),
    });
  });

// COMMENT_LIKED
export const likeComment = (
  client: VirtaClient,
  // @ts-ignore - type this
  dispatch,
  comment: CommunityComment
) =>
  client
    .post(communityLikeUrl, {
      post_id: comment.id,
    })
    .then(() => {
      const updatedComment = toggleLikeOnPostOrComment(comment);
      dispatch({
        type: COMMENT_LIKED,
        payload: normalizeComment(updatedComment),
      });
    });

// COMMENT_UNLIKED
export const commentUnlike = (
  client: VirtaClient,
  // @ts-ignore - type this
  dispatch,
  comment: CommunityComment
) =>
  client
    .delete(communityLikeUrl, {
      post_id: comment.id,
    })
    .then(() => {
      const updatedComment = toggleLikeOnPostOrComment(comment);
      dispatch({
        type: COMMENT_UNLIKED,
        payload: normalizeComment(updatedComment),
      });
    });

// @ts-ignore - type this
export const toggleLikeOnPostOrComment = (post) =>
  Object.assign({}, post, {
    liked: !post.liked,
    likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1,
  });

// TOPICS RECEIVED
// @ts-ignore - type this
export const fetchCommunityTopics = (client: VirtaClient, dispatch) =>
  client.get(communityTopicsUrl).then((resp: any) => {
    // @ts-ignore - type this
    const topics = resp.data.map((t) => transformTopic(t));
    dispatch({
      type: TOPICS_RECEIVED,
      payload: normalizeTopics(topics),
    });
  });

// AUTHORS_RECEIVED
// @ts-ignore - type this
export const fetchCommunityUser = (client: VirtaClient, dispatch) =>
  client.get(communityUserUrl).then((author: any) => {
    dispatch({
      type: AUTHORS_RECEIVED,
      payload: normalizeAuthor(author),
    });
  });

export const updateCommunityUser = (
  client: VirtaClient,
  // @ts-ignore - type this
  dispatch,
  userData: UpdateCommunityUserPayload
) =>
  client.patch(communityUserUrl, userData).then((data: any) => {
    dispatch({
      type: AUTHOR_UPDATED,
      payload: normalizeAuthor(data),
    });
  });
