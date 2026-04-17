/*
  Warnings:

  - You are about to drop the column `isRecipeCover` on the `Media` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[recipeId]` on the table `Media` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Media" DROP COLUMN "isRecipeCover";

-- CreateIndex
CREATE UNIQUE INDEX "Media_recipeId_key" ON "Media"("recipeId");
