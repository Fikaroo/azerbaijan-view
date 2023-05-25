import { request } from "graphql-request";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const fetcher = (query: string, variables: any) => {
  return request("http://localhost:3000/graphql", query, variables);
};

const City = () => {
  const { cityName } = useParams();
  const { data, error } = useSWR(
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

  console.log(data);

  const citydata = data?.city?.[0]?.Seher;
  console.log(citydata);
  return (
    <div className="flex justify-between items-center w-full h-[100vh] ">
      <div className="flex-col justify-center text-center">
        <h1 className="text-3xl">Baki</h1>
        <div className=" flex flex-col text-left">
          <span>Əhali sayı: 2300500</span>
          <span>Ərazi: 2.140km²</span>
          <span>Rayon sayı: 12</span>
          <span>Poçt indeksi: AZ1000</span>
          <span>Orta aylıq temperatur: 15.1°C</span>
          <span>Yağıntının miqdarı: 210mm</span>
        </div>
      </div>
      <div className="w-96 h-96  bg-gray-200 shadow">
        <img
          className="object-cover w-full h-full rounded-lg"
          src="https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80"
          alt="baku"
        />
        {Array.isArray(citydata) ? (
          citydata?.map(({ RayonKod }) => <h2>{RayonKod}</h2>)
        ) : (
          <h2>No data</h2>
        )}
      </div>
    </div>
  );
};

export default City;
