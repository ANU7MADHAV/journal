-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "JournalEntry" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Analysis" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "entryId" TEXT NOT NULL,
    "mood" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "negative" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "JournalEntry_id_key" ON "JournalEntry"("id");

-- CreateIndex
CREATE UNIQUE INDEX "JournalEntry_userId_id_key" ON "JournalEntry"("userId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Analysis_id_key" ON "Analysis"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Analysis_entryId_key" ON "Analysis"("entryId");
