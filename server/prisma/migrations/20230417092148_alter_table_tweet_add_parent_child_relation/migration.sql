/*
  Warnings:

  - You are about to drop the column `parentId` on the `posts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_parentId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "parentId";

-- AlterTable
ALTER TABLE "tweets" ADD COLUMN     "parentId" TEXT;

-- AddForeignKey
ALTER TABLE "tweets" ADD CONSTRAINT "tweets_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "tweets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
