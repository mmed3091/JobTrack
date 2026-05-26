-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "roleTitle" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "meetsReqs" BOOLEAN NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,
    "jobUrl" TEXT NOT NULL,
    "notes" TEXT,
    "status" TEXT NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
