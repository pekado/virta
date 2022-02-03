export default {
  name: "figure",
  title: "Figure",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "altText",
      title: "Alternative Text",
      type: "string",
      description: "Important for accessibility.",
    },
  ],
};
