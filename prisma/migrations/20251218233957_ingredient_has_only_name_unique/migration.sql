/*
  Warnings:

  - You are about to drop the column `newName` on the `Ingredient` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Ingredient_newName_key";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "newName";
