import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";

const App = () => {
  return (
    <div className="container flex justify-center w-full min-h-screen text-gray-900 font-poppins">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="city/:cityName" index element={<City />} />
      </Routes>
    </div>
  );
};

export default App;
