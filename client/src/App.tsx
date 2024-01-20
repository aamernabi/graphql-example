import React from "react";
import { gql } from "./__generated__";
import { useQuery } from "@apollo/client";
import PostList from "./components/post_list";
import { Post } from "./__generated__/graphql";
import "./App.css";

export const GET_POSTS = gql(`
  query PostsQuery {
    posts {
      id
      title
      content
      author {
        id
        name
        photo
      }
      reviews {
        rating
        review
      }
      created
    }
  }

`);

const App = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  const posts: Post[] = data?.posts ?? [];

  return (
    <div>
      <h2 className="heading">Blog Posts</h2>
      <div className="card-grid">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default App;
