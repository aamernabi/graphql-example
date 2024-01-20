/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
};

export type CreatePostInput = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor?: Maybe<Author>;
  createPost?: Maybe<Post>;
  deletePost?: Maybe<Array<Maybe<Post>>>;
  updatePost?: Maybe<Post>;
};


export type MutationCreateAuthorArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  post: CreatePostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  post: UpdatePostInput;
};

export type Post = {
  __typename?: 'Post';
  author: Author;
  content: Scalars['String']['output'];
  created?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<Review>>;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  review?: Maybe<Review>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  review?: Maybe<Scalars['String']['output']>;
};

export type UpdatePostInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQueryQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title: string, content: string, created?: string | null, author: { __typename?: 'Author', id: string, name: string, photo?: string | null }, reviews?: Array<{ __typename?: 'Review', rating: number, review?: string | null }> | null } | null> | null };


export const PostsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]} as unknown as DocumentNode<PostsQueryQuery, PostsQueryQueryVariables>;