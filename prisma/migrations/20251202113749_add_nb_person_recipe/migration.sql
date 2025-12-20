/*
  Warnings:

  - Added the required column `nbOfPersons` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "nbOfPersons" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "duration" DROP NOT NULL;
