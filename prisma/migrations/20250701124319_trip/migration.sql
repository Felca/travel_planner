/*
  Warnings:

  - You are about to drop the column `endDate` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `enddate` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startdate` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_tripId_fkey";

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "endDate",
DROP COLUMN "imageUrl",
DROP COLUMN "startDate",
ADD COLUMN     "enddate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "imageurl" TEXT,
ADD COLUMN     "startdate" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Location";
