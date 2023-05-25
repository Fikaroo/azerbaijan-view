-- CreateTable
CREATE TABLE "Kodlar" (
    "CommonId" TEXT NOT NULL PRIMARY KEY,
    "SeherKod" INTEGER NOT NULL,
    "RayonKod" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Seher" (
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

-- CreateTable
CREATE TABLE "Rayon" (
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

-- CreateIndex
CREATE UNIQUE INDEX "Kodlar_SeherKod_key" ON "Kodlar"("SeherKod");

-- CreateIndex
CREATE UNIQUE INDEX "Kodlar_RayonKod_key" ON "Kodlar"("RayonKod");
