-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Kodlar" (
    "CommonId" TEXT NOT NULL PRIMARY KEY,
    "SeherKod" INTEGER,
    "RayonKod" INTEGER
);
INSERT INTO "new_Kodlar" ("CommonId", "RayonKod", "SeherKod") SELECT "CommonId", "RayonKod", "SeherKod" FROM "Kodlar";
DROP TABLE "Kodlar";
ALTER TABLE "new_Kodlar" RENAME TO "Kodlar";
CREATE UNIQUE INDEX "Kodlar_SeherKod_key" ON "Kodlar"("SeherKod");
CREATE UNIQUE INDEX "Kodlar_RayonKod_key" ON "Kodlar"("RayonKod");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
