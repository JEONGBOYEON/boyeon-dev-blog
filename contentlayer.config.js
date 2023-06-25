import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    category: { type: "string", required: false },
    tag: { type: "string", required: false },
  },
}));

export default makeSource({
  contentDirPath: "./src/posts",
  documentTypes: [Post],
});
