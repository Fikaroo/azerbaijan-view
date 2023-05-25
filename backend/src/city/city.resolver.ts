import { Resolver, Query, Args } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City, Indexs } from './entities/city.entity';

@Resolver(() => [City, Indexs])
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Query(() => [Indexs], { name: 'Indexs' })
  findAll() {
    return this.cityService.findAll();
  }

  @Query(() => [Indexs])
  async city(@Args('cityName', { type: () => String }) cityName: string) {
    return this.cityService.findOne(cityName);
  }
}
