import { normalize, schema } from "@virtahealth/utils";
import {
  CommunityComment,
  CommunityPost,
  CommunityTopic,
  CommunityUser,
} from "../../types";

// Posts
export const post = new schema.Entity("posts");
export const normalizePost = (data: CommunityPost) => normalize(data, post);
export const normalizePosts = (data: CommunityPost[]) =>
  normalize(data, new schema.Array(post));

export interface NormalizedPosts {
  entities: {
    posts: CommunityPost[];
  };
  result: Array<CommunityPost["id"]> | CommunityPost["id"];
}

// Comments
export const comment = new schema.Entity("comments");
export const normalizeComment = (data: CommunityComment) =>
  normalize(data, comment);
export const normalizeComments = (data: CommunityComment[]) =>
  normalize(data, new schema.Array(comment));

export interface NormalizedComments {
  entities: {
    comments: CommunityComment[];
  };
  result: Array<CommunityComment["id"]> | CommunityComment["id"];
}

// Topics
export const topic = new schema.Entity("topics");
export const normalizeTopic = (data: CommunityTopic) => normalize(data, topic);
export const normalizeTopics = (data: CommunityTopic[]) =>
  normalize(data, new schema.Array(topic));

export interface NormalizedTopics {
  entities: {
    topics: CommunityTopic[];
  };
  result: Array<CommunityTopic["id"]> | CommunityTopic["id"];
}

// Authors / CommunityUsers
export const author = new schema.Entity("authors");
export const normalizeAuthor = (data: CommunityUser) => normalize(data, author);
export const normalizeAuthors = (data: CommunityUser[]) =>
  normalize(data, new schema.Array(author));

export interface NormalizedAuthors {
  entities: {
    authors: CommunityUser[];
  };
  result: Array<CommunityUser["id"]> | CommunityUser["id"];
}
