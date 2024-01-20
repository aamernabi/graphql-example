# GraphQL Example Project

This repository contains a simple example of a GraphQL application with a client and server component. The client is built using React.js with TypeScript, and the server is implemented with Express.js, also using TypeScript. The client is set up with Vite for fast development, while the server uses a simple npm script for generating and serving.
This project requires nodejs v18._._.

## Project Structure

```
graphql-example/
|-- client/
|   |-- src/
|   |   |-- // React components and client-side code
|   |-- // Other client-related files
|-- server/
|   |-- src/
|   |   |-- // Express server and server-side code
|   |-- // Other server-related files
```

## GraphQL Schema

The GraphQL schema defines the data structure for the application. It includes three main types: Author, Review, and Post. The schema also defines queries and mutations to interact with the data.

## Getting Started

### Client

1. Navigate to the client directory: cd client
2. Install dependencies: npm install
3. Start the development server: npm run dev

### Server

1. Navigate to the server directory: cd server
2. Install dependencies: npm install
3. 3.enerate and serve the server: npm start

## Usage

### Queries

```
authors: Get a list of all authors.
posts: Get a list of all posts.
post(id: ID!): Get a specific post by ID.
author(id: ID!): Get a specific author by ID.
review(id: ID!): Get a specific review by ID.
```

### Mutations

```
createPost(post: CreatePostInput!): Create a new post.
createAuthor(name: String!): Create a new author.
updatePost(id: ID!, post: UpdatePostInput!): Update an existing post.
deletePost(id: ID!): Delete a post by ID.
```

## Contributing

Feel free to contribute by opening issues or creating pull requests. Please follow our contribution guidelines.

License
This project is licensed under the MIT License - see the LICENSE file for details.
