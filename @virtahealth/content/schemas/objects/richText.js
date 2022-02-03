export default {
  name: "richText",
  type: "array",
  of: [
    { type: "block" },
    { type: "calloutBlock" },
    { type: "figure" },
    { type: "tableField" },
    { type: "video" },
  ],
};
