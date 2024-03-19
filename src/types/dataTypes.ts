/* eslint-disable @typescript-eslint/no-explicit-any */
export type Blogs = {
  id: number;
  title: string;
  slug: string;
  image: string;
  desc: string;
  category: {
    categoryName: string;
    id: number;
    name: string;
  };
  tags: [
    {
      id: number;
      tagName: string;
      tagSlug: string;
    }
  ];
  scrollToTop: any;
};

export type Categories = {
  id: number;
  categorySlug: string;
  title: string;
};
export type Tags = {
  id: number;
  title: string;
  tagSlug: string;
};

export type Comments = {
  postId: string;
  userId: string;
  _id: string;
  comment: string;
  parentCommentId: string;
};

export type Users = {
  _id: string;
  name: string;
  image: string;
  email: string;
  password: string;
};

export type State = {
  isLoading: boolean;
  users: [Users];
  error: string;
};
