// import { Button } from "./ui/button";
//import imageHome from "../assets/homeImage.avif";
// import imageHome from "../assets/imagenTrabajolisto.png";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


export const Hero = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    try {
      console.log(searchValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-start gap-16 bg-hero-banner border-b-2 border-black w-[1500px] max-w-full h-[601px]">
      <div className="flex flex-col gap-16 ml-8 w-3/5">
        <section className="flex flex-col items-center gap-2">
          <h1 className="font-extrabold font-galada text-7xl text-main-red tracking-wide">
            ¡Tus Servicios a un Click!
          </h1>
          <h3 className="font-bold font-libre-franklin text-gray-700 text-xl italic">
            Velocidad y accesibilidad en búsquedas de servicios
          </h3>
        </section>
        <search className="flex bg-white border-2 border-main-red">
          <Input
            className="px-4 border-0 font-medium text-gray-700 text-xl outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            type="text"
            value={searchValue}
            placeholder="Busca tu servicio aquí"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button
            onClick={handleSearch}
            className="bg-main-red hover:bg-red-700 px-10 rounded-none h-full text-lg text-white outline-none"
          >
            Buscar
          </Button>
        </search>
      </div>
    </section>
  )
}


export default Hero;
