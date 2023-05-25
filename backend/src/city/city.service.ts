import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}
  findAll() {
    return this.prisma.kodlar.findMany({
      include: {
        Seher: true,
        Rayon: true,
      },
    });
  }

  findOne(cityName: string) {
    return this.prisma.kodlar.findMany({
      where: {
        Seher: {
          SeherAdi: cityName,
        },
      },
      include: {
        Seher: true,
        Rayon: true,
      },
    });
  }
}
