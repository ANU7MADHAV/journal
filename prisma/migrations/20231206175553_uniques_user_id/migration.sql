/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId,id]` on the table `Journal` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "Journal_userId_id_key" ON "Journal"("userId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
