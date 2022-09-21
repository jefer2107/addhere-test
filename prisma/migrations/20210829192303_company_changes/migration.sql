/*
  Warnings:

  - Added the required column `city` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "county" TEXT,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "stateRegion" TEXT;
