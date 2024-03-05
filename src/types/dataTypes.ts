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
  tag: [
    {
      id: number;
      tagName: string;
      tagSlug: string;
    }
  ];
};

export type Categories = {
  id: number;
  categorySlug: string;
  title: string;
};
export type Tags = {
  id: number;
  tagName: string;
  tagSlug: string;
};

export type Comments = {
  id: number;
  user_id: number;
  post_id: number;
  comment: string;
  parent_comment_id: number;
};

export type Users = {
  user_id: number;
  user_name: string;
  user_image: string;
  user_email: string;
  user_password: string;
  id: number;
};

export type State = {
  isLoading: boolean;
  users: [Users];
  error: string;
};
