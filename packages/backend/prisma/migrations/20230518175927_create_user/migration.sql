/*
  Warnings:

  - A unique constraint covering the columns `[internalId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bannerUrl` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconUrl` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminComment` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkName` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `internalId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Submission_Status" AS ENUM ('IN_REVIEW', 'APPROVED', 'DECLINED');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'EDITOR', 'ADMIN');

-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "bannerUrl" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "iconUrl" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "adminComment" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "linkId" TEXT,
ADD COLUMN     "linkName" TEXT NOT NULL,
ADD COLUMN     "status" "Submission_Status" NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "internalId" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_CollectionToLink" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionToLink_AB_unique" ON "_CollectionToLink"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionToLink_B_index" ON "_CollectionToLink"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_internalId_key" ON "User"("internalId");

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToLink" ADD CONSTRAINT "_CollectionToLink_A_fkey" FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToLink" ADD CONSTRAINT "_CollectionToLink_B_fkey" FOREIGN KEY ("B") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;
