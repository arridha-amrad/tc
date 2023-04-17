export type TweetWithPostChildren = ITweet & {
  post: IPostWithParentsAndChildren;
};

export type Tweet = ITweet & { post: IPostWithParents };

export type ITweet = {
  id: string;
  postId: string;
  userId: string;
  isRetweet: boolean;
  user: IAuthor;
  createdAt: Date;
  updatedAt: Date;
};

export type IPost = Post & {
  author: IAuthor;
  medias: Media[];
  _count: IPostCount;
  isLiked: boolean;
  isRetweet: boolean;
};

export type IPostWithParents = IPost & {
  parents: IPost[];
};

export type IPostWithParentsAndChildren = IPostWithParents & {
  children: IPostWithParents[];
};

export interface IPostCount {
  children: number;
  likes: number;
  medias: number;
  tweets: number;
}

export interface IAuthor {
  email: string;
  id: string;
  username: string;
  imageURL: string;
  fullName?: string;
}

export type Post = {
  id: string;
  body: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Media = {
  url: string;
};

export type CreateCommentDTO = {
  body: string;
  postId: string;
};
