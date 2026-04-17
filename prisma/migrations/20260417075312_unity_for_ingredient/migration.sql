/*
  Warnings:

  - You are about to drop the column `unit` on the `RecipeIngredient` table. All the data in the column will be lost.
  - Added the required column `unity` to the `RecipeIngredient` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Unity" AS ENUM ('mg', 'g', 'kg', 'oz', 'lb', 'ml', 'cl', 'dl', 'l', 'tsp', 'tbsp', 'fl_oz', 'cup', 'pt', 'qt', 'gal', 'unit', 'dozen', 'pinch', 'dash', 'drop', 'slice', 'clove', 'bunch', 'sprig', 'leaf', 'can', 'packet', 'to_taste', 'as_needed');

-- AlterTable
ALTER TABLE "RecipeIngredient" DROP COLUMN "unit",
ADD COLUMN     "unity" "Unity" NOT NULL;
