export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  updateUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TestingQueryVariables = Exact<{ [key: string]: never; }>;


export type TestingQuery = { __typename?: 'Query', getUsers?: Array<{ __typename?: 'User', id: string, name: string, email: string } | null> | null };
