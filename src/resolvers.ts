export const resolvers = {
  Query: {
    authors: (_, __, { dataSources }) => dataSources.db.authors,
    posts: (_, __, { dataSources }) => dataSources.db.posts,
    post: (_, { id }, { dataSources }) =>
      dataSources.db.posts.find((post) => post.id == id),
    author: (_, { id }, { dataSources }) =>
      dataSources.db.authors.find((author) => author.id == id),
    review: (_, { id }, { dataSources }) =>
      dataSources.db.reviews.find((review) => review.id == id),
  },
  Post: {
    author: ({ authorId }, _, { dataSources }) =>
      dataSources.db.authors.find((author) => author.id == authorId),
    reviews: ({ reviews }, _, { dataSources }) =>
      dataSources.db.reviews.filter((it) => reviews?.includes(it.id)),
  },
};
