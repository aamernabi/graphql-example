import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    authors: (_, __, { dataSources }) => dataSources.db.authors(),
    posts: (_, __, { dataSources }) => dataSources.db.posts(),
    post: (_, { id }, { dataSources }) =>
      dataSources.db.posts().find((post) => post.id === id),
    author: (_, { id }, { dataSources }) =>
      dataSources.db.authors().find((author) => author.id === id),
    review: (_, { id }, { dataSources }) =>
      dataSources.db.reviews().find((review) => review.id === id),
  },
  Post: {
    author: ({ author }, _, { dataSources }) =>
      dataSources.db.authors().find((it) => it.id === author),
    reviews: ({ reviews }, _, { dataSources }) =>
      dataSources.db.reviews().filter((it) => reviews?.includes(it.id)),
    content: async ({ id }, _, { dataSources }) =>
      await dataSources.db.getPostContent(id),
  },
  Mutation: {
    createAuthor: (_, { name }, { dataSources }) =>
      dataSources.db.createAuthor(name),
    createPost: (_, { post }, { dataSources }) =>
      dataSources.db.createPost(post),
    deletePost: (_, { id }, { dataSources }) => dataSources.db.deletePost(id),
    updatePost: (_, { id, post }, { dataSources }) =>
      dataSources.db.updatePost(id, post),
  },
};
