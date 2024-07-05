-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "object" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "actorName" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "actionId" TEXT NOT NULL,
    "actionName" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "targetName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "occurredAt" DATETIME NOT NULL,
    "metadata" TEXT NOT NULL
);
