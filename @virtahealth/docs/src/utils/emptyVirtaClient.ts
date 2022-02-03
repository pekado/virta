import { VirtaClient } from "@virtahealth/components";

const emptyVirtaClient: VirtaClient = {
  get: function <T = unknown>(): Promise<T> {
    throw new Error("Function not implemented.");
  },
  post: function <T = unknown>(): Promise<T> {
    throw new Error("Function not implemented.");
  },
  patch: function <T = unknown>(): Promise<T> {
    throw new Error("Function not implemented.");
  },
  delete: function <T = unknown>(): Promise<T> {
    throw new Error("Function not implemented.");
  },
};

export default emptyVirtaClient;
