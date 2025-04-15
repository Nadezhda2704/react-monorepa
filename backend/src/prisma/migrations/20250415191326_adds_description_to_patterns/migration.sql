/*
  Warnings:

  - Added the required column `description` to the `Pattern` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pattern" ADD COLUMN     "description" TEXT NOT NULL;
