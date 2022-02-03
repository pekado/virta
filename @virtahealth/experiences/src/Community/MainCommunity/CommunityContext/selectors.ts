import {
  CommunityComment,
  CommunityPost,
  CommunityTopic,
  CommunityUser,
} from "../../types";
import { CommunityState } from "./reducer";

export const selectAll = (
  resourceKey: keyof CommunityState,
  normalizedState: CommunityState
) =>
  Object.keys(normalizedState).includes(resourceKey) &&
  Object.values(normalizedState[resourceKey].byId);

// Post Selectors
export const selectAllPosts = (
  communityState: CommunityState
): CommunityPost[] => selectAll("posts", communityState) as CommunityPost[];

export const selectPostById = (
  id: number,
  communityState: CommunityState
): CommunityPost | null => communityState.posts.byId[id] ?? null;

export const selectPostsByTopicId = (
  id: number,
  communityState: CommunityState
): CommunityPost[] | null => {
  const { byId, byTopicId } = communityState.posts;
  const postIds = byTopicId[id];
  return postIds ? postIds.map((pId) => byId[pId]) : [];
};

export const selectPostsByAuthorId = (
  id: number,
  communityState: CommunityState
): CommunityPost[] | null => {
  const { byId, byAuthorId } = communityState.posts;
  const postIds = byAuthorId[id];
  return postIds ? postIds.map((pId) => byId[pId]) : [];
};

// Topic Selectors
export const selectAllTopics = (
  communityState: CommunityState
): CommunityTopic[] => selectAll("topics", communityState) as CommunityTopic[];

export const selectTopicById = (
  id: number,
  communityState: CommunityState
): CommunityTopic | null => communityState.topics.byId[id] ?? null;

// Comment Selectors
export const selectAllComments = (
  communityState: CommunityState
): CommunityComment[] =>
  selectAll("comments", communityState) as CommunityComment[];

export const selectCommentById = (
  id: number,
  communityState: CommunityState
): CommunityComment | null => communityState.comments.byId[id] ?? null;

export const selectCommentsByAuthorId = (
  id: number,
  communityState: CommunityState
): CommunityComment[] | null => {
  const { byId, byAuthorId } = communityState.comments;
  const commentIds = byAuthorId[id];
  return commentIds ? commentIds.map((cId) => byId[cId]) : null;
};

// Author Selectors
export const selectAllAuthors = (
  communityState: CommunityState
): CommunityUser[] => selectAll("authors", communityState) as CommunityUser[];

export const selectAuthorById = (
  id: number,
  communityState: CommunityState
): CommunityUser | null => communityState.authors.byId[id] ?? null;
