-- AlterTable
ALTER TABLE "SnapIv" ADD COLUMN     "professionalName" TEXT,
ADD COLUMN     "professionalType" TEXT,
ALTER COLUMN "companyName" DROP NOT NULL;
