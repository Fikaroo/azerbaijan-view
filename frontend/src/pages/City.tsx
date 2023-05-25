import { request } from "graphql-request";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Kodlar, Rayon, Seher } from "../../types/types";

const fetcher = (
  query: string,
  variables: any
): Promise<{ city: Kodlar[] }> => {
  return request("http://localhost:3000/graphql", query, variables);
};

const City = () => {
  const { cityName } = useParams();
  const { data, isLoading, error } = useSWR(
    cityName
      ? [
          `query City($cityName: String!) {
        city(cityName: $cityName) {
          CommonId
          SeherKod
          RayonKod
          Seher {
            SeherId
            SeherAdi
            Ehali
            Erazi
            OrtaAyliqTemperatur
            YagintininMiqdari
            PoctIndeksi
            RayonSayi
          }
          Rayon {
            RayonId
            RayonAdi
            Ehali
            Erazi
            BelediyyelerinSayi
            RayonIcraHakimiyyetininTelefonu
            PoctIndeksi
            KendlerinSayi
          }
        }
      }
    `,
          { cityName },
        ]
      : null,
    ([query, variable]) => fetcher(query, variable)
  );

  if (error) return <div>Error</div>;

  if (isLoading) return <div>Loading...</div>;

  const citydata = data?.city?.[0] as Kodlar;
  const city = citydata?.Seher; // Seher datasi
  const village = citydata?.Rayon; // Rayon datasi

  return (
    <div className="w-full py-10">
      <div className="flex items-center justify-between">
        <div className="flex-col justify-center text-center">
          <h1 className="text-3xl">Baki</h1>
          <div className="flex flex-col text-left ">
            <span>Əhali sayı: {city.Ehali}</span>
            <span>Ərazi: {city.Erazi}</span>
            <span>Rayon sayı: {city.RayonSayi}</span>
            <span>Poçt indeksi: {city.PoctIndeksi}</span>
            <span>Orta aylıq temperatur: {city.OrtaAyliqTemperatur}</span>
            <span>Yağıntının miqdarı: {city.YagintininMiqdari}</span>
          </div>
        </div>
        <div className="bg-gray-200 shadow w-96 h-96">
          <img
            className="object-cover w-full h-full rounded-lg"
            src="https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80"
            alt="baku"
          />
        </div>
      </div>
      {/* Rayonlar haqqinda melumatlar */}
      {village.map(({ RayonAdi, RayonIcraHakimiyyetininTelefonu }) => (
        <div>{RayonAdi}</div>
      ))}
    </div>
  );
};

export default City;
