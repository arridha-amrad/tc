import { Media, Post, User } from '@prisma/client';

export type IPost = Post & {
  author: Author;
  medias: Media[];
  _count: PostCounter;
  isLiked: boolean;
};

export interface PostCounter {
  Likes: number;
  Medias: number;
  Tweets: number;
}

export type Author = Pick<User, 'fullname' | 'id' | 'imageURL' | 'username'>;
