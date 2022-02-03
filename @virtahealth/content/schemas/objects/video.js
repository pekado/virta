import { VideoPreview } from "~/previews/components/VideoPreview";

export default {
  name: "video",
  title: "Video",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Video Title",
      type: "string",
    },
    {
      name: "url",
      title: "Video URL",
      type: "url",
      description: "The URL where this video hosted.",
    },
    {
      name: "altText",
      title: "Alternative Text",
      type: "string",
      description: "Important for accessibility.",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: VideoPreview,
  },
};
