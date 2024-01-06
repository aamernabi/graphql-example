import { warn } from "console";
import { PostModel, ReviewModel, AuthorModel } from "./models";
import { CreatePostInput, UpdatePostInput } from "./types";

const authorsData: AuthorModel[] = [
  {
    id: "1",
    name: "Aamer Paul",
  },
  {
    id: "2",
    name: "Mathew Johnson",
  },
  {
    id: "3",
    name: "Mary Willson",
  },
];

const reviewsData: ReviewModel[] = [
  {
    id: "102334",
    rating: 4,
    review: "Great job!",
  },
  {
    id: "102335",
    rating: 3,
  },
];

const postsData: PostModel[] = [
  {
    id: "101",
    title: "Birds, bugs, and beauty: The winners of Wiki Loves Earth 2023",
    content: `
      Much of the world’s natural beauty and animal species rest in places none of us will ever visit. So why not let one of the world’s highest-quality photo contests bring them to your virtual doorstep?

      For a decade now, Wiki Loves Earth has been snapshotting the best of the globe’s natural heritage, whether it’s in a nationally protected area or in a nearby park. This year’s edition is no different: you are about to witness jaw-dropping animal close-ups juxtaposed with wide vistas of secluded solitude. The photos are a demonstration of human perseverance, dedication, and skill.

      The contest winner (at top) finds a common tiger beetle perched upon an acorn, its objective unknown, in a wooded area located a bit east of Ukraine’s capital city, Kyiv. Wiki Loves Earth’s contest judges commended photographer Serhii Miroshnyk for the technical skills required to capture the moment. One judge compared it to the award-winning 1996 documentary Microcosmos, known for its close portrayal of insect interactions.
    `,
    author: "3",
    reviews: [],
    created: "Dec 20th 2023",
  },
  {
    id: "102",
    title: "On Dealing with Grief Around the Holidays",
    content: `
      I used to call it the “month of mourning” … mostly because I grew up a comic book nerd, and I love alliteration.

      You see, my mother died of cancer in June 2006, one month and one day before her 65th birthday. To say that kind of a loss leaves a mark isn’t necessary. Many of us have lost parents: Biological. Adopted. Foster. Family friends. Stand-ins, you know? “Uncle” Marvin. “Aunt” Eleanor. Whomever we looked up to, whoever we loved, we’ve lost them. And when I lost mine, I can say I lost the one person who loved me unconditionally. I lost someone I could never get back, a feeling of security and strength, and, of course, love that I would never get back.

      So back in the day, when that particular month and a day rolled around, I went out. And then I went out some more. And some more. And some more. Clubs. Bars. House parties. I’d flood myself with liquor, anything to dull the pain of remembering that she was gone.
    `,
    author: "2",
    reviews: ["102334", "102335"],
    created: "Dec 23th 2023",
  },
];

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

  private formatCurrentDateInUTC() {
    return new Date().toISOString().slice(0, 19);
  }
}
