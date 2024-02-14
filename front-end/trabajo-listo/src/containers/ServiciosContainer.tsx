import ServiciosCard from "@/components/ServiciosCard";
import image1 from "../assets/imageServicio1.png";
import image2 from "../assets/imageServicio2.png";
import image3 from "../assets/imageServicio3.png";

const ServiciosContainer = () => {
  const DUMMY_SERVICIOS = [
    { imgUrl: image1, id: 1, title: "MECÁNICO" },
    { imgUrl: image2, id: 2, title: "PLOMERÍA " },
    { imgUrl: image3, id: 3, title: "PELUQUERÍA" },
  ];
  return (
    <div className="flex flex-col gap-20 bg-[#FEF4E2] px-10 py-20">
      <div className="text-center">
        <h1 className="font-black text-[#FE4C55] text-3xl">
          ALGUNOS DE LOS SERVICIOS
        </h1>
        <h2 className="font-bold text-[#5D5657] text-2xl">
          Recomendados por la comunidad
        </h2>
      </div>
      <div className="flex justify-center gap-7 px-1 ">
        {DUMMY_SERVICIOS.map((servicio) => (
          <ServiciosCard key={servicio.id} servicio={servicio}></ServiciosCard>
        ))}
      </div>
    </div>
  );
};

export default ServiciosContainer;
