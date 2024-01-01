import gql from "graphql-tag";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
//
// Adding #graphql to the beginning of a template literal provides GraphQL syntax highlighting in supporting IDEs.
// (Make sure to install the required extensions). or we can use gql library
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Author" type defines the queryable fields for every author in our data source.
  type Author {
    id: ID!
    name: String!
  }
  type Review {
    id: ID!
    rating: Int!
    review: String
  }
  type Post {
    id: ID!
    title: String!
    content: String!
    author: Author!
    reviews: [Review!]
    created: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "authors", "posts" query returns an array of zero or more authors, posts (defined above).
  type Query {
    authors: [Author]
    posts: [Post]
    post(id: ID!): Post
    author(id: ID!): Author
    review(id: ID!): Review
  }

  # The "Mutation" is type of operation that is used to modify the operation.
  # Mutations allow clients to makes changes to data on server, such as creating,
  # deleting, updating records.
  type Mutation {
    createPost(post: CreatePostInput!): Post
    createAuthor(name: String!): Author
  }

  # "input" is special kind of type that is used to represent input values for a field.
  # typically used for operations that involve creating or updating resouce
  input CreatePostInput {
    title: String!
    content: String!
    author: String!
  }
`;
