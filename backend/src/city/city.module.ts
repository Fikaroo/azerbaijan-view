import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityResolver } from './city.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CityResolver, CityService, PrismaService],
})
export class CityModule {}
