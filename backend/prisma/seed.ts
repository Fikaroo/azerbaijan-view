import { PrismaClient } from 'prisma/prisma-client';
const prisma = new PrismaClient();

async function seedData() {
  const cities = [
    {
      cityName: 'Bakı',
      cityCode: 12,
      villageCount: 0,
    },
    {
      cityName: 'Gəncə',
      cityCode: 22,
      villageCount: 0,
    },
    {
      cityName: 'Naxçıvan',
      cityCode: 1364,
      villageCount: 28,
    },
    {
      cityName: 'Xankəndi',
      cityCode: 0,
      villageCount: 0,
    },
    {
      cityName: 'Lənkəran',
      cityCode: 2525,
      villageCount: 97,
    },
    {
      cityName: 'Mingəçevir',
      cityCode: 2427,
      villageCount: 33,
    },
    {
      cityName: 'Naftalan',
      cityCode: 2235,
      villageCount: 21,
    },
    {
      cityName: 'Sumqayıt',
      cityCode: 186,
      villageCount: 0,
    },
    {
      cityName: 'Şəki',
      cityCode: 2424,
      villageCount: 44,
    },
    {
      cityName: 'Şirvan',
      cityCode: 2121,
      villageCount: 60,
    },
    {
      cityName: 'Yevlax',
      cityCode: 2233,
      villageCount: 68,
    },
    {
      cityName: 'Şuşa',
      cityCode: 0,
      villageCount: 0,
    },
    {
      cityName: 'Culfa',
      cityCode: 1366,
      villageCount: 16,
    },
    {
      cityName: 'Ordubad',
      cityCode: 1367,
      villageCount: 16,
    },
  ];
  try {
    // Iterate over the users array and insert each user into the database
    for (const city of cities) {
      await prisma.kodlar.create({
        data: {
          SeherKod: city.cityCode,
          RayonKod: city.cityCode,
        },
      });
    }

    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
