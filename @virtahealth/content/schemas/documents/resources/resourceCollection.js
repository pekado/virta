export default {
  name: "resourceCollection",
  title: "Collection",
  type: "document",
  fields: [
    {
      title: "Collection Name",
      name: "name",
      type: "string",
      description:
        "The name of this collection (e.g. Food, VirtaLife, Behavioral Health)",
    },
    {
      title: "Care Protocols",
      name: "careProtocols",
      type: "array",
      description: "All of the care protocols that this Collection applies to",
      of: [
        {
          type: "reference",
          to: [{ type: "careProtocol" }],
        },
      ],
    },
    {
      title: "Contents",
      name: "contents",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "article" }, { type: "recipe" }],
        },
      ],
    },
  ],
};
