/*
  Warnings:

  - You are about to drop the column `guestContact` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `guestName` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `contactNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `User` table. All the data in the column will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "guestContact",
DROP COLUMN "guestName",
ADD COLUMN     "contact" TEXT,
ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "contactNumber",
DROP COLUMN "fullName",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT;
