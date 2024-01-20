import { PostModel, ReviewModel, AuthorModel } from "./models";
import { CreatePostInput, UpdatePostInput } from "./types";
import { getMarkdownContent } from "./utils.js";
import DATA from "./db/index.js";

const authorsData: AuthorModel[] = DATA.authors;
const reviewsData: ReviewModel[] = DATA.reviews;
const postsData: PostModel[] = DATA.posts;

export class DB {
  authors(): AuthorModel[] {
    return authorsData;
  }

  reviews(): ReviewModel[] {
    return reviewsData;
  }

  posts(): PostModel[] {
    return postsData;
  }

  createAuthor(name: string): AuthorModel {
    const author: AuthorModel = {
      name,
      id: Math.floor(Math.random() * 1000000).toString(),
    };
    authorsData.push(author);
    return author;
  }

  createPost(post: CreatePostInput): PostModel {
    const author = this.authors().find((it) => it.id === post.author);
    if (!author) {
      throw Error("Author not found!");
    }
    const newPost: PostModel = {
      ...post,
      id: Math.floor(Math.random() * 1000000).toString(),
      author: author.id,
      created: this.formatCurrentDateInUTC(),
    };

    postsData.push(newPost);
    return newPost;
  }

  updatePost(id: string, updatedPost: UpdatePostInput) {
    const post = postsData.find((it) => it.id === id);
    if (!post) {
      return null;
    }
    const index = postsData.indexOf(post);
    postsData[index] = { ...post, ...updatedPost };
    return postsData[index];
  }

  deletePost(id: string) {
    const post = postsData.find((it) => it.id === id);
    if (!post) {
      return postsData;
    }

    const index = postsData.indexOf(post);
    postsData.splice(index, 1);
    return postsData;
  }

  async getPostContent(id: string): Promise<string> {
    try {
      return await getMarkdownContent(`md-files/${id}.md`);
    } catch (err) {
      console.error(err?.message);
      return `Failed to load content.`;
    }
  }

  private formatCurrentDateInUTC() {
    return new Date().toISOString().slice(0, 19);
  }
}
