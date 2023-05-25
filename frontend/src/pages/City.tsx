import { request } from "graphql-request";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { Kodlar, Rayon, Seher } from "../../types/types";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

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

  const details = {
    "Əhali sayı": city.Ehali,
    Ərazi: city.Erazi,
    "Rayon sayı": city.RayonSayi,
    "Poçt indeksi": city.PoctIndeksi,
    "Orta aylıq temperatur": city.OrtaAyliqTemperatur,
    "Yağıntının miqdarı": city.YagintininMiqdari,
  };

  const villageDetails = village?.map(
    ({
      RayonAdi,
      Ehali,
      Erazi,
      BelediyyelerinSayi,
      RayonIcraHakimiyyetininTelefonu,
      PoctIndeksi,
      KendlerinSayi,
    }) => ({
      "Rayon Adi": RayonAdi,
      "Bələdiyyələrin Sayi": BelediyyelerinSayi,
      Əhali: Ehali,
      Ərazi: Erazi,
      "Kəndlərin Sayi": KendlerinSayi,
      "Poçt İndeksi": PoctIndeksi,
      "Rayon Icra Hakimiyyətinin Telefonu": RayonIcraHakimiyyetininTelefonu,
    })
  );

  return (
    <div className="w-full py-10 mb-10">
      <Link to={"/"} className="flex gap-4 mb-4 btn w-fit">
        <ArrowLeftCircleIcon className="w-8 h-8" /> <span>{city.SeherAdi}</span>
      </Link>
      <div>
        <div className="w-full h-96 carousel">
          <div id="slide1" className="relative w-full carousel-item">
            <img
              className="object-cover w-full h-full rounded-lg"
              src="https://images.unsplash.com/photo-1596306499398-8d88944a5ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80"
              alt="baku"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="relative w-full carousel-item">
            <img
              className="object-cover w-full h-full rounded-lg"
              src="https://images.unsplash.com/photo-1622673486788-9e20bd2e8a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFraXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="baku"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 py-6">
          <h1 className="text-3xl font-semibold">{city.SeherAdi}</h1>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  {Object.keys(details).map((key) => (
                    <th>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{citydata.SeherKod}</td>
                  {Object.values(details).map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-medium">
          {city.SeherAdi} Rayonları : {city.RayonSayi}
        </h2>
        {/* Rayonlar haqqinda melumatlar */}
        <div className="grid h-full grid-cols-3 py-4">
          {villageDetails.map((detail) => (
            <div className="h-full rounded-b">
              <div className="flex items-center justify-center w-full h-12 rounded-t bg-gradient-to-r from-sky-600 to-blue-600">
                <h3 className="text-2xl font-semibold text-gray-50 ">
                  {detail["Rayon Adi"]}
                </h3>
              </div>

              <div className="grid h-full py-4 bg-gray-200">
                {Object.entries(detail).map(([key, value], index) => (
                  <>
                    {index !== 0 ? (
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="block w-1/2 btn btn-ghost">{key}</span>{" "}
                        <span className="block">{value}</span>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default City;
