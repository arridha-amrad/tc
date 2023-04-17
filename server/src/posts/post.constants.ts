export const QUERY_MEDIAS = {
  select: {
    url: true,
  },
};

export const POST_COUNT = {
  Likes: true,
  Medias: true,
  Tweets: true,
};

export const AUTHOR_DATA = {
  imageURL: true,
  username: true,
  fullName: true,
  email: true,
  id: true,
};

export const POST_DATA = {
  _count: {
    select: POST_COUNT,
  },
  Medias: {
    select: true,
  },
  author: {
    select: AUTHOR_DATA,
  },
};
