/*
  Warnings:

  - Added the required column `bannerUrl` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iconUrl` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminComment` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkName` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Submission_Status" AS ENUM ('IN_REVIEW', 'APPROVED', 'DECLINED');

-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "bannerUrl" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "iconUrl" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "adminComment" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "linkId" TEXT,
ADD COLUMN     "linkName" TEXT NOT NULL,
ADD COLUMN     "status" "Submission_Status" NOT NULL;

-- CreateTable
CREATE TABLE "_CollectionToLink" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CollectionToLink_AB_unique" ON "_CollectionToLink"("A", "B");

-- CreateIndex
CREATE INDEX "_CollectionToLink_B_index" ON "_CollectionToLink"("B");

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToLink" ADD CONSTRAINT "_CollectionToLink_A_fkey" FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToLink" ADD CONSTRAINT "_CollectionToLink_B_fkey" FOREIGN KEY ("B") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;
