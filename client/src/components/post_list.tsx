import { Post as PostModel } from "../__generated__/graphql";
import Post from "./post";

interface PostListProps {
  posts: PostModel[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
