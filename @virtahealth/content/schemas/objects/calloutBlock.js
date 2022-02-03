export default {
  name: "calloutBlock",
  title: "Callout Block",
  type: "object",
  description:
    "A block of text to draw the reader's attention from the main contents",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      description: 'Choose between "blue", "green", or "purple" color options',
      options: {
        list: ["blue", "purple", "green"],
      },
    },
    {
      name: "contents",
      title: "Contents",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              {
                title: "Strong",
                value: "strong",
                blockEditor: {
                  isCallout: true,
                },
              },
              {
                title: "Emphasis",
                value: "em",
                blockEditor: {
                  isCallout: true,
                },
              },
              {
                title: "Code",
                value: "code",
                blockEditor: {
                  isCallout: true,
                },
              },
              {
                title: "Highlight",
                value: "highlight",
                blockEditor: {
                  isCallout: true,
                },
              },
            ],
          },
          styles: [
            { title: "Purple", value: "purple" },
            { title: "Blue", value: "blue" },
            { title: "Green", value: "green" },
          ],
        },
      ],
    },
  ],
};
