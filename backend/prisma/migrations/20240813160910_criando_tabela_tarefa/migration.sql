-- CreateTable
CREATE TABLE "Tarefa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "prioridade" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "concluida" BOOLEAN NOT NULL DEFAULT false
);
