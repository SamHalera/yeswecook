/*
  Warnings:

  - Added the required column `category` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('entrées', 'plats', 'desserts', 'apéros');

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "category" "Category" NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecipeIngredient" (
    "recipeId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" TEXT,

    CONSTRAINT "RecipeIngredient_pkey" PRIMARY KEY ("recipeId","ingredientId")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" SERIAL NOT NULL,
    "source" TEXT NOT NULL,
    "caption" TEXT,
    "publicId" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "isRecipeCover" BOOLEAN NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeIngredient" ADD CONSTRAINT "RecipeIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
