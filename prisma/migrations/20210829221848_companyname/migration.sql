/*
  Warnings:

  - Added the required column `companyName` to the `SnapIv` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SnapIv" ADD COLUMN     "companyName" TEXT NOT NULL,
ALTER COLUMN "companyId" DROP NOT NULL;
