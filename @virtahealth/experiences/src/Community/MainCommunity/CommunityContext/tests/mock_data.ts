import { transformComment, transformPost, transformTopic } from "../api";

export const mockCommunityPosts = [
  {
    author: {
      days_on_virta: 841,
      default_profile_picture_url:
        "https://ketoaccountimagesprod.s3-us-west-2.amazonaws.com/coaches_temp/ozzie.jpg",
      display_name: "Travis C",
      id: 406,
      is_active: true,
      profile_picture_url:
        "https://ketoaccountimagesprod.s3-us-west-2.amazonaws.com/coaches_temp/ozzie.jpg",
      role: "Patient",
    },
    body: "The first post in the feed.",
    category_id: 14,
    comment_count: 3,
    comments: [],
    created_at: "2020-11-12T02:42:50.693000+00:00",
    like_count: 0,
    liked: false,
    media: [],
    post_id: 3491,
    topic_id: 2274,
  },
];

export const mappedMockCommunityPosts = mockCommunityPosts.map((post) =>
  transformPost(post)
);

export const mockCommunityComments = [
  {
    author: {
      days_on_virta: 215,
      default_profile_picture_url:
        "https://ketoaccountimagesprod.s3-us-west-2.amazonaws.com/coaches_temp/ozzie.jpg",
      display_name: "Neha S",
      id: 1,
      is_active: true,
      profile_picture_url:
        "https://ketoaccountimagesprod.s3-us-west-2.amazonaws.com/coaches_temp/ozzie.jpg",
      role: "Patient",
      tos_accepted_on: "2018-03-29T05:23:57.719834+00:00",
      virta_user_id: 80,
    },
    body: "The first comment in the first post of the feed.",
    created_at: "2018-04-20T18:53:30.710000+00:00",
    like_count: 0,
    liked: false,
    media: [],
    post_id: 1,
    topic_id: 2274,
  },
  {
    author: {
      days_on_virta: 215,
      default_profile_picture_url:
        "https://ketoaccountimagesprod.s3-us-west-2.amazonaws.com/coaches_temp/ozzie.jpg",
      display_name: "Neha S",
      id: 1,
      is_active: true,
      profile_picture_url:
        "https://ketoaccountimagesprod.s3-us-west-2.amazonaws.com/coaches_temp/ozzie.jpg",
      role: "Patient",
      tos_accepted_on: "2018-03-29T05:23:57.719834+00:00",
      virta_user_id: 80,
    },
    body: "Making a comment now.",
    created_at: "2018-04-20T18:53:30.710000+00:00",
    like_count: 0,
    liked: false,
    media: [],
    post_id: 2,
    topic_id: 2274,
  },
  {
    author: {
      days_on_virta: 215,
      default_profile_picture_url:
        "https://ketoaccountimagesprod.s3-us-west-2.amazonaws.com/coaches_temp/ozzie.jpg",
      display_name: "Neha S",
      id: 2,
      is_active: true,
      profile_picture_url:
        "https://ketoaccountimagesprod.s3-us-west-2.amazonaws.com/coaches_temp/ozzie.jpg",
      role: "Patient",
      tos_accepted_on: "2018-03-29T05:23:57.719834+00:00",
      virta_user_id: 80,
    },
    body: "Making a comment now.",
    created_at: "2018-04-20T18:53:30.710000+00:00",
    like_count: 0,
    liked: false,
    media: [],
    post_id: 3,
    topic_id: 2274,
  },
];

export const mappedMockCommunityComments = mockCommunityComments.map(
  (comment) => transformComment(comment)
);

export const mockCommunityTopics = [
  {
    category_id: 33,
    is_small_group: false,
    name: "Holidays",
    position: 2,
  },
  {
    category_id: 7,
    is_small_group: false,
    name: "Progress",
    position: 6,
  },
  {
    category_id: 8,
    is_small_group: false,
    name: "Food Ideas",
    position: 5,
  },
];

export const mappedMockCommunityTopics = mockCommunityTopics.map((topic) =>
  transformTopic(topic)
);
