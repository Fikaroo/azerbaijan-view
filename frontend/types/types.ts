/**
 * Model Kodlar
 *
 */
export type Kodlar = {
  CommonId: string;
  SeherKod: number | null;
  RayonKod: number | null;
  Seher: Seher;
  Rayon: Rayon[];
};

/**
 * Model Seher
 *
 */
export type Seher = {
  SeherId: number;
  SeherAdi: string;
  Ehali: number;
  Erazi: string;
  OrtaAyliqTemperatur: string;
  YagintininMiqdari: string;
  PoctIndeksi: string;
  RayonSayi: number;
};

/**
 * Model Rayon
 *
 */
export type Rayon = {
  RayonId: number;
  RayonAdi: string;
  Ehali: number;
  Erazi: string;
  BelediyyelerinSayi: number;
  RayonIcraHakimiyyetininTelefonu: string;
  PoctIndeksi: string;
  KendlerinSayi: number;
};
