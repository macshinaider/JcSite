/*
  Warnings:

  - Added the required column `avatar` to the `Jogadores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Times` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jogadores" ADD COLUMN     "avatar" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Times" ADD COLUMN     "logo" TEXT NOT NULL;
