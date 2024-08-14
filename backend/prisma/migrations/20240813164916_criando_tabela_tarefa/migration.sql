/*
  Warnings:

  - You are about to alter the column `data` on the `Tarefa` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tarefa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "prioridade" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "concluida" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Tarefa" ("concluida", "data", "descricao", "id", "prioridade", "titulo") SELECT "concluida", "data", "descricao", "id", "prioridade", "titulo" FROM "Tarefa";
DROP TABLE "Tarefa";
ALTER TABLE "new_Tarefa" RENAME TO "Tarefa";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
