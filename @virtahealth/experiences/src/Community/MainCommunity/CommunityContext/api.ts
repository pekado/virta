import { CommunityComment, CommunityPost, CommunityTopic } from "../../types";

// `category_id` on a Topic/Post maps to a CommunityTopic `id`
// `topic_id` on a Post/Comment record maps to a CommunityPost `id`
// `post_id` on a Comment record maps to the `id` for a CommunityComment
// `post_id` on a Post record does not seem to map to anything

export const transformPost = (post: any, expanded = false): CommunityPost => {
  const { topic_id, category_id, comments, author, ...rest } = post;
  return {
    ...rest,
    id: topic_id,
    topic_id: category_id,
    // @ts-ignore - type this
    comments: expanded ? comments.map((c: any) => c.id) : comments,
    author: author.id,
  };
};

export const transformComment = (comment: any): CommunityComment => {
  const { topic_id, post_id, author, ...rest } = comment;
  return {
    ...rest,
    id: post_id,
    post_id: topic_id,
    author: author.id,
  };
};

export const transformTopic = (topic: any): CommunityTopic => {
  const { category_id, ...rest } = topic;
  return {
    ...rest,
    id: category_id,
  };
};
