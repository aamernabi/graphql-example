// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
//
// Adding #graphql to the beginning of a template literal provides GraphQL syntax highlighting in supporting IDEs.
// (Make sure to install the required extensions). or we can use gql library
export const typeDefs = `#graphql
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
  }
`;
