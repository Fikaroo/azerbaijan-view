/*
  Warnings:

  - You are about to alter the column `BelediyyelerinSayi` on the `Rayon` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rayon" (
    "RayonId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
