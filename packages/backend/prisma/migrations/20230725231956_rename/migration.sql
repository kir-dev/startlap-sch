/*
  Warnings:

  - You are about to drop the `Visits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Visits" DROP CONSTRAINT "Visits_linkId_fkey";

-- DropTable
DROP TABLE "Visits";

-- CreateTable
CREATE TABLE "Visit" (
    "id" TEXT NOT NULL,
    "linkId" TEXT NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
