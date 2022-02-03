import * as React from "react";
import { FlatList } from "react-native";
import { CommunityPost } from "../../types";
import { PostPreview } from "./PostPreview";

interface Props {
  posts: CommunityPost[];
}

export const Feed: React.FC<Props> = ({ posts }) => (
  <FlatList
    data={posts}
    renderItem={({ item }) => <PostPreview post={item} />}
    keyExtractor={(item) => item.id?.toString()}
  />
);
