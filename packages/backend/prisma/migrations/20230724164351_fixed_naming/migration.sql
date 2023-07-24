/*
  Warnings:

  - You are about to drop the `Trending` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Trending";

-- CreateTable
CREATE TABLE "Visits" (
    "id" TEXT NOT NULL,
    "linkId" TEXT NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Visits" ADD CONSTRAINT "Visits_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
