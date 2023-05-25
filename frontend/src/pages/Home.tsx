import Map from "../components/Map";

const Home = () => {
  return (
    <div>
      <h1 className="flex gap-4 justify-center items-center font-bold text-3xl pt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 36 36"
        >
          <path fill="#E00034" d="M0 13h36v10H0z" />
          <path
            fill="#0098C3"
            d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"
          />
          <g fill="#FFF">
            <path d="M17.844 21.333a3.333 3.333 0 1 1 2.475-5.565a4 4 0 1 0 .001 4.464a3.325 3.325 0 0 1-2.476 1.101z" />
            <path d="m23.667 17.998l-1.196-.424l.544-1.146l-1.146.545l-.426-1.195l-.424 1.196l-.003-.002l-1.144-.542l.546 1.146l-1.196.426l1.196.424l-.544 1.146l1.141-.543l.005-.002l.426 1.195l.424-1.196l1.147.544l-.546-1.146z" />
          </g>
          <path
            fill="#00AE65"
            d="M4 31h28a4 4 0 0 0 4-4v-4H0v4a4 4 0 0 0 4 4z"
          />
        </svg>
        Azərbaycan Xəritəsi
      </h1>
      <Map />
    </div>
  );
};

export default Home;
