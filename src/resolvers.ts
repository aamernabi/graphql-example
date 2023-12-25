import { authors, posts, reviews } from "./_db.js";

export const resolvers = {
  Query: {
    authors: () => authors,
    posts: () => posts,
    post: (_, { id }) => posts.find((post) => post.id == id),
    author: (_, { id }) => authors.find((author) => author.id == id),
    review: (_, { id }) => reviews.find((review) => review.id == id),
  },
  Post: {
    author: ({ authorId }) => authors.find((author) => author.id == authorId),
    reviews: (parent) =>
      reviews.filter((it) => parent.reviews?.includes(it.id)),
  },
};
