import * as React from "react";
import { VirtaClient } from "@virtahealth/components";
import { CommunityPost } from "../types";
import { Feed } from "./Feed";
import { selectAllPosts } from "./CommunityContext/selectors";
import { useCommunityContext } from "./CommunityContext";
import { fetchPosts } from "./CommunityContext/actions";

interface Props {
  client: VirtaClient;
}

export const MainCommunity: React.FC<Props> = ({ client }) => {
  const { communityState, dispatch } = useCommunityContext();

  React.useEffect(() => {
    fetchPosts(client, dispatch);
  }, []);

  const sortByMostRecent = (a: CommunityPost, b: CommunityPost) =>
    new Date(b.created_at) > new Date(a.created_at) ? 1 : -1;

  // Filter posts with selectors
  const postsToDisplay = selectAllPosts(communityState)?.sort(sortByMostRecent);
  return <Feed posts={postsToDisplay} />;
};
