/*
  Warnings:

  - Changed the type of `startTime` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endTime` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `receiptUrl` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contact` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIME NOT NULL,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIME NOT NULL,
ALTER COLUMN "receiptUrl" SET NOT NULL,
ALTER COLUMN "contact" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
