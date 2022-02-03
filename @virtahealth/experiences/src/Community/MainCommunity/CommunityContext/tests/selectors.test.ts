import { initialState } from "../reducer";
import {
  selectAllPosts,
  selectPostById,
  selectPostsByAuthorId,
  selectPostsByTopicId,
} from "../selectors";
import { mappedMockCommunityPosts } from "./mock_data";

describe("Community selectors", () => {
  describe("posts", () => {
    const stateWithPosts = {
      ...initialState,
      posts: {
        allIds: mappedMockCommunityPosts.map((p) => p.id),
        byId: mappedMockCommunityPosts.reduce(
          (acc, p) => ({ ...acc, [p.id]: p }),
          {}
        ),
        byTopicId: mappedMockCommunityPosts.reduce<{ [key: number]: string[] }>(
          (acc, p) =>
            acc[p.topic_id]
              ? { ...acc, [p.topic_id]: [...acc[p.topic_id], String(p.id)] }
              : { ...acc, [p.topic_id]: [String(p.id)] },
          {}
        ),
        byAuthorId: mappedMockCommunityPosts.reduce<{
          [key: number]: number[];
        }>(
          (acc, p) =>
            acc[p.author]
              ? { ...acc, [p.author]: [...acc[p.author], p.id] }
              : { ...acc, [p.author]: [p.id] },
          {}
        ),
      },
    };

    it("can select all", () => {
      // @ts-ignore - fix the types
      const result = selectAllPosts(stateWithPosts);
      expect(result).toEqual(mappedMockCommunityPosts);
    });

    it("can select by id", () => {
      const result = selectPostById(
        mappedMockCommunityPosts[0].id,
        // @ts-ignore - fix the types
        stateWithPosts
      );
      expect(result).toEqual(mappedMockCommunityPosts[0]);
    });

    it("can select by topic id", () => {
      const result = selectPostsByTopicId(
        mappedMockCommunityPosts[0].topic_id,
        // @ts-ignore - fix the types
        stateWithPosts
      );
      expect(result).toEqual([mappedMockCommunityPosts[0]]);
    });

    it("can select by author", () => {
      const result = selectPostsByAuthorId(
        mappedMockCommunityPosts[0].author,
        // @ts-ignore - fix the types
        stateWithPosts
      );
      expect(result).toEqual([mappedMockCommunityPosts[0]]);
    });
  });
});
