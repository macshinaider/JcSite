-- CreateTable
CREATE TABLE "Times" (
    "id" SERIAL NOT NULL,
    "nometime" TEXT NOT NULL,
    "created_at" TEXT,
    "updated_at" TEXT,

    CONSTRAINT "Times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jogadores" (
    "id" SERIAL NOT NULL,
    "nomejogador" TEXT NOT NULL,
    "numerocamisa" INTEGER NOT NULL,
    "posicao" TEXT NOT NULL,
    "timesId" INTEGER,

    CONSTRAINT "Jogadores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Times_nometime_key" ON "Times"("nometime");

-- AddForeignKey
ALTER TABLE "Jogadores" ADD CONSTRAINT "Jogadores_timesId_fkey" FOREIGN KEY ("timesId") REFERENCES "Times"("id") ON DELETE SET NULL ON UPDATE CASCADE;
