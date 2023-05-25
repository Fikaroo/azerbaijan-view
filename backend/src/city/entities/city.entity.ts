import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field(() => Int)
  SeherId: number;

  @Field(() => String)
  SeherAdi: string;

  @Field(() => Int)
  Ehali: number;

  @Field(() => String)
  Erazi: string;

  @Field(() => String)
  OrtaAyliqTemperatur: string;

  @Field(() => String)
  YagintininMiqdari: string;

  @Field(() => String)
  PoctIndeksi: string;

  @Field(() => Int)
  RayonSayi: number;
}

@ObjectType()
export class Village {
  @Field(() => Int)
  RayonId: number;

  @Field(() => String)
  RayonAdi: string;

  @Field(() => Int)
  Ehali: number;

  @Field(() => String)
  Erazi: string;

  @Field(() => Int)
  BelediyyelerinSayi: number;

  @Field(() => String)
  RayonIcraHakimiyyetininTelefonu: string;

  @Field(() => String)
  PoctIndeksi: string;

  @Field(() => Int)
  KendlerinSayi: number;
}

@ObjectType()
export class Indexs {
  @Field(() => String)
  CommonId: string;

  @Field(() => Int)
  SeherKod: number;

  @Field(() => Int)
  RayonKod: number;

  @Field(() => City, { nullable: true })
  Seher: City;

  @Field(() => [Village], { nullable: true })
  Rayon: Village;
}
