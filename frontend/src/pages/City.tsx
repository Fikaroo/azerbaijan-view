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

  if (error) return <div>Error</div>;

  console.log(data);
  return (
    <div>
      <div className="w-96 h-96 rounded-2xl bg-gray-200 shadow p-4">
        <img
          className="object-cover w-full h-full rounded-lg"
          src="https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80"
          alt="baku"
        />
      </div>
    </div>
  );
};

export default City;
