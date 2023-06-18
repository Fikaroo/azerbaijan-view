/*
  Warnings:

  - The primary key for the `Rayon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `Id` was added to the `Rayon` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rayon" (
    "RayonId" INTEGER NOT NULL,
    "Id" TEXT NOT NULL PRIMARY KEY,
    "RayonAdi" TEXT NOT NULL,
    "Ehali" INTEGER NOT NULL,
    "Erazi" TEXT NOT NULL DEFAULT 'km²',
    "BelediyyelerinSayi" INTEGER NOT NULL,
    "RayonIcraHakimiyyetininTelefonu" TEXT NOT NULL,
    "PoctIndeksi" TEXT NOT NULL,
    "KendlerinSayi" INTEGER NOT NULL,
    CONSTRAINT "Rayon_RayonId_fkey" FOREIGN KEY ("RayonId") REFERENCES "Kodlar" ("RayonKod") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Rayon" ("BelediyyelerinSayi", "Ehali", "Erazi", "KendlerinSayi", "PoctIndeksi", "RayonAdi", "RayonIcraHakimiyyetininTelefonu", "RayonId") SELECT "BelediyyelerinSayi", "Ehali", "Erazi", "KendlerinSayi", "PoctIndeksi", "RayonAdi", "RayonIcraHakimiyyetininTelefonu", "RayonId" FROM "Rayon";
DROP TABLE "Rayon";
ALTER TABLE "new_Rayon" RENAME TO "Rayon";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
