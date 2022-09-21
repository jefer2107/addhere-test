/*
  Warnings:

  - Added the required column `image` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "image" TEXT NOT NULL;
