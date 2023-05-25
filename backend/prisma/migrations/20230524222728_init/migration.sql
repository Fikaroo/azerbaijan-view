/*
  Warnings:

  - You are about to alter the column `RayonKod` on the `Kodlar` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `SeherKod` on the `Kodlar` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Rayon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `RayonId` on the `Rayon` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Seher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `SeherId` on the `Seher` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Kodlar" (
    "CommonId" TEXT NOT NULL PRIMARY KEY,
    "SeherKod" INTEGER NOT NULL,
    "RayonKod" INTEGER NOT NULL
);
INSERT INTO "new_Kodlar" ("CommonId", "RayonKod", "SeherKod") SELECT "CommonId", "RayonKod", "SeherKod" FROM "Kodlar";
DROP TABLE "Kodlar";
ALTER TABLE "new_Kodlar" RENAME TO "Kodlar";
CREATE UNIQUE INDEX "Kodlar_SeherKod_key" ON "Kodlar"("SeherKod");
CREATE UNIQUE INDEX "Kodlar_RayonKod_key" ON "Kodlar"("RayonKod");
CREATE TABLE "new_Rayon" (
    "RayonId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "RayonAdi" TEXT NOT NULL,
    "Ehali" INTEGER NOT NULL,
    "Erazi" TEXT NOT NULL DEFAULT 'km²',
    "BelediyyelerinSayi" TEXT NOT NULL DEFAULT '°C',
    "RayonIcraHakimiyyetininTelefonu" TEXT NOT NULL DEFAULT 'mm',
    "PoctIndeksi" TEXT NOT NULL,
    "KendlerinSayi" INTEGER NOT NULL,
    CONSTRAINT "Rayon_RayonId_fkey" FOREIGN KEY ("RayonId") REFERENCES "Kodlar" ("RayonKod") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Rayon" ("BelediyyelerinSayi", "Ehali", "Erazi", "KendlerinSayi", "PoctIndeksi", "RayonAdi", "RayonIcraHakimiyyetininTelefonu", "RayonId") SELECT "BelediyyelerinSayi", "Ehali", "Erazi", "KendlerinSayi", "PoctIndeksi", "RayonAdi", "RayonIcraHakimiyyetininTelefonu", "RayonId" FROM "Rayon";
DROP TABLE "Rayon";
ALTER TABLE "new_Rayon" RENAME TO "Rayon";
CREATE TABLE "new_Seher" (
    "SeherId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "SeherAdi" TEXT NOT NULL,
    "Ehali" INTEGER NOT NULL,
    "Erazi" TEXT NOT NULL DEFAULT 'km²',
    "OrtaAyliqTemperatur" TEXT NOT NULL DEFAULT '°C',
    "YagintininMiqdari" TEXT NOT NULL DEFAULT 'mm',
    "PoctIndeksi" TEXT NOT NULL,
    "RayonSayi" INTEGER NOT NULL,
    CONSTRAINT "Seher_SeherId_fkey" FOREIGN KEY ("SeherId") REFERENCES "Kodlar" ("SeherKod") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Seher" ("Ehali", "Erazi", "OrtaAyliqTemperatur", "PoctIndeksi", "RayonSayi", "SeherAdi", "SeherId", "YagintininMiqdari") SELECT "Ehali", "Erazi", "OrtaAyliqTemperatur", "PoctIndeksi", "RayonSayi", "SeherAdi", "SeherId", "YagintininMiqdari" FROM "Seher";
DROP TABLE "Seher";
ALTER TABLE "new_Seher" RENAME TO "Seher";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
