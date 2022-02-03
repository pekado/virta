// This object should be used to insert an entire table into a schema
export default {
  name: "tableField",
  title: "Table",
  type: "object",
  description: "A table to capture structured data",
  fields: [
    {
      name: "table",
      title: "Table",
      type: "table",
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
    {
      name: "useRowHeaders",
      title: "Use Row Headers",
      description:
        "Setting this to `true` will use the cells of the first column of this table as headers for each row",
      type: "boolean",
    },
    {
      name: "useColumnHeaders",
      title: "Use Column Headers",
      description:
        "Setting this to `true` will use the cells of the first row of this table as headers for each column",
      type: "boolean",
    },
  ],
};
