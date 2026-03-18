import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  groups: [
    { name: "details", title: "Details", default: true },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "details",
      validation: (rule: any) => rule.required().error("Category title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "details",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule: any) => rule.required().error("Slug is required for URL generation"),
    }),
    defineField({
      name: "parent",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
      group: "details",
      description: "Keep empty for top-level categories like Mehendi or Resin",
    } as any),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "details",
      rows: 3,
    } as any),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "parent.title",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Subcategory of ${subtitle}` : "Main Category",
      };
    },
  },
});
