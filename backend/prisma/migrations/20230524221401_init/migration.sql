/*
  Warnings:

  - The primary key for the `Rayon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Seher` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rayon" (
    "RayonId" TEXT NOT NULL PRIMARY KEY,
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
    "SeherId" TEXT NOT NULL PRIMARY KEY,
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
CREATE TABLE "new_Kodlar" (
    "CommonId" TEXT NOT NULL PRIMARY KEY,
    "SeherKod" TEXT NOT NULL,
    "RayonKod" TEXT NOT NULL
);
INSERT INTO "new_Kodlar" ("CommonId", "RayonKod", "SeherKod") SELECT "CommonId", "RayonKod", "SeherKod" FROM "Kodlar";
DROP TABLE "Kodlar";
ALTER TABLE "new_Kodlar" RENAME TO "Kodlar";
CREATE UNIQUE INDEX "Kodlar_SeherKod_key" ON "Kodlar"("SeherKod");
CREATE UNIQUE INDEX "Kodlar_RayonKod_key" ON "Kodlar"("RayonKod");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
