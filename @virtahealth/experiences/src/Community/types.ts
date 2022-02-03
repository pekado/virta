export interface CommunityUser {
  id: number;
  days_on_virta: number;
  display_name: string;
  is_active: boolean;
  profile_picture_url: string;
  role: string;
  posts_and_comments?: Array<CommunityPost | CommunityComment>;
  virta_user_id?: number;
  tos_accepted_on?: string;
}

export interface CommunityPost {
  id: number;
  topic_id: number;
  body: string;
  media: string[];
  comment_count: number;
  comments: CommunityComment["id"][];
  created_at: string;
  like_count: number;
  liked: boolean;
  author: CommunityUser["id"];
}

export interface CommunityComment {
  id: number;
  post_id: number;
  author: CommunityUser["id"];
  body: string;
  media: string[];
  liked: boolean;
  like_count: number;
  created_at: string;
}

export interface CommunityTopic {
  id: number;
  name: string;
  is_small_group: boolean;
  position: number;
  // TODO: Is this needed? Added categoryId in as a hack to fix broken build, but it isn't populated anywhere
  // This field is referred to in TopicsPicker.
  categoryId: number;
}

export interface CommunityTopicByCategoryId {
  [categoryId: number]: CommunityTopic;
}

export interface CreatePostPayload {
  media: any;
  body: string;
  category_id?: number;
}

export interface UpdatePostPayload {
  post_id: number;
  category_id?: number; // This is CommunityTopic.id
  media: any;
  body: string;
}

export interface CreateCommentPayload {
  topic_id: number; // This is CommunityPost.id
  body: string;
  media: any;
}

export interface UpdateCommentPayload {
  topic_id: number; // This is CommunityPost.id
  post_id: number; // This is CommunityComment.id
  media: any;
  body: string;
}

export interface UpdateCommunityUserPayload {
  display_name: string;
  use_default_profile_picture: boolean;
  new_photo_key: string; // I think?
}
