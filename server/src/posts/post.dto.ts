import { Post } from '@prisma/client';

export type PostDTO = Pick<Post, 'body' | 'authorId'>;
