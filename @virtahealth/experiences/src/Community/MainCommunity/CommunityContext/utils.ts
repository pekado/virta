import { cloneDeep } from "@virtahealth/utils";
import { CommunityComment, CommunityPost } from "../../types";
import { CommentState, PostState } from "./reducer";

export const keyByAuthorId = (
  state: PostState | CommentState,
  // @ts-ignore - type this
  payloadById
): { [id: number]: number[] } => {
  return Object.values(payloadById).reduce(
    // @ts-ignore - type this
    (acc: any, val: CommunityPost | CommunityComment) => {
      if (val.author in acc) {
        if (acc[val.author].includes(val.id)) {
          return acc;
        }
        return { ...acc, [val.author]: [...acc[val.author], val.id] };
      }

      return { ...acc, [val.author]: [val.id] };
    },
    cloneDeep(state.byAuthorId)
  ) as { [id: number]: number[] };
};
