import { Media, Post, Prisma, User } from '@prisma/client';

export type TPostAuthor = Pick<
  User,
  'fullname' | 'imageURL' | 'id' | 'username'
>;

export type TPostCounterSelect = Prisma.PostCountOutputTypeSelect;
export type TPostCounter = Record<keyof TPostCounterSelect, number>;

export type TPostAuthorSelect = Record<keyof TPostAuthor, boolean>;

export type TPostMedia = Pick<Media, 'url'>;
export type TPostMediaSelect = Record<keyof TPostMedia, boolean>;

export type TPost = Post & {
  author: TPostAuthor;
  Medias: { url: string }[];
  _count: TPostCounter;
};
