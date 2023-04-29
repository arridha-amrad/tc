import {
  TPostAuthorSelect,
  TPostCounterSelect,
  TPostMediaSelect,
} from './post.types';

export const POST_COUNT: TPostCounterSelect = {
  Likes: true,
  Medias: true,
  Tweets: true,
};

export const AUTHOR_DATA: TPostAuthorSelect = {
  id: true,
  imageURL: true,
  username: true,
  fullname: true,
};

export const MEDIA_DATA: TPostMediaSelect = {
  url: true,
};

// export const POST_DATA = {
//   _count: {
//     select: POST_COUNT,
//   },
//   Medias: {
//     select: MEDIA_DATA,
//   },
//   author: {
//     select: AUTHOR_DATA,
//   },
// };
