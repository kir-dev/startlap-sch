/*
  Warnings:

  - You are about to drop the column `iconUrl` on the `Collection` table. All the data in the column will be lost.
  - You are about to drop the column `iconUrl` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `iconUrl` on the `Submission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "iconUrl";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "iconUrl";

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "iconUrl";
