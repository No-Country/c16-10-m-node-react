import { Button } from "./ui/button";
//import imageHome from "../assets/homeImage.avif";
import imageHome from "../assets/imagenTrabajolisto.png";

const Hero = () => {
  return (
    <div className="flex items-center justify-around bg-gradient-to-r from-[#fffcfc] via-[#fffcfc] to-red-300 px-10 border-white h-[675px] overflow-hidden">
      <div className="flex flex-col flex-1 justify-around pl-16 h-[60%]">
        <div className="flex flex-col gap-2">
          <h2 className="font-black text-5xl text-red-500 italic">
            TRABAJO LISTO
          </h2>
          <h3 className="font-bold text-[#5D5657] text-3xl">
            Te ofrecemos accesibilidad y velocidad en busquedas de servicios
          </h3>
        </div>
        <p className="font-medium text-[#5D5657] text-lg">
        Descubre una amplia gama de servicios ofrecidos por profesionales y personas de diversas áreas en nuestra plataforma. ¡Encuentra exactamente lo que necesitas entre miles de opciones disponibles!
        </p>
        <Button className="bg-red-500 hover:bg-red-600 px-10 py-6 rounded-full w-40 text-white text-xl hover:text-white outline-none">
          Ver servicios
        </Button>
      </div>
      <div className="flex flex-1 items-center justify-end h-full ">
        <img className="top-0 min-w-[40rem] h-[100%] " src={imageHome}></img>
      </div>
    </div>
  );
};

export default Hero;
