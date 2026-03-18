import { PackageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: PackageIcon,
  groups: [
    { name: "details", title: "Details", default: true },
    { name: "media", title: "Media" },
    { name: "engagement", title: "Engagement" },
    { name: "inventory", title: "Inventory" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      group: "details",
      validation: (rule) => rule.required().error("Product name is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "details",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required().error("Slug is required for URL generation"),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "details",
      rows: 4,
    } as any),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      group: "details",
      description: "Price in currency (e.g., 599.99)",
      validation: (rule) => rule.positive().error("Price must be a positive number"),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      group: "details",
      validation: (rule: any) => rule.required().error("Category is required"),
    } as any),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      group: "media",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "Important for accessibility and SEO.",
            },
            {
              name: "externalLink",
              type: "url",
              title: "External Source Link",
              description: "Link to where this picture is from (e.g., Instagram, Pinterest)",
            },
          ],
        },
      ],
      validation: (rule: any) => rule.min(1).error("At least one image is required"),
    } as any),
    defineField({
      name: "likes",
      title: "Total Likes",
      type: "number",
      group: "engagement",
      initialValue: 0,
      validation: (rule) => rule.min(0).error("Likes cannot be negative"),
    }),
    defineField({
      name: "saves",
      title: "Total Save Counts",
      type: "number",
      group: "engagement",
      initialValue: 0,
      validation: (rule) => rule.min(0).error("Saves cannot be negative"),
    }),
    defineField({
      name: "stock",
      title: "In Stock",
      type: "number",
      group: "inventory",
      initialValue: 0,
      validation: (rule) => rule.min(0).integer().error("Stock must be a non-negative whole number"),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      group: "inventory",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.title",
      media: "images.0",
      price: "price",
    },
    prepare({ title, subtitle, media, price }) {
      return {
        title,
        subtitle: `${subtitle ? subtitle : "Uncategorized"} • ${price ? `Price: ${price}` : "No price set"}`,
        media,
      };
    },
  },
});
