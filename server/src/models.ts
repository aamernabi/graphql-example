export type AuthorModel = {
  id: string;
  name: string;
  photo?: string;
};

export type ReviewModel = {
  id: string;
  rating: number;
  review?: string;
};

export type PostModel = {
  id: string;
  title: string;
  content: string;
  author: string;
  reviews?: string[];
  created?: string;
  image?: string;
};
