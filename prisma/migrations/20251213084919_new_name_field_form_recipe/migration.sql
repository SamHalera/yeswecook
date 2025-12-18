/*
  Warnings:

  - A unique constraint covering the columns `[newName]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "newName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_newName_key" ON "Ingredient"("newName");
