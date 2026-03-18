import { StarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: StarIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "media", title: "Media" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (rule: any) => rule.required().error("Hero title is required"),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      group: "content",
      rows: 3,
    } as any),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      group: "media",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for accessibility and SEO.",
        },
        {
          name: "link",
          type: "url",
          title: "Clickable Image Link",
          description: "URL this banner should lead to when clicked."
        }
      ],
      validation: (rule: any) => rule.required().error("Hero image is required"),
    } as any),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero Section Content",
        media,
      };
    },
  },
});
