import ServiciosCard from "@/components/ServiciosCard";
import image1 from "../assets/imageServicio1.jpg";
import image2 from "../assets/imageServicio2.jpg";
import image3 from "../assets/imageServicio3.jpg";

const ServiciosContainer = () => {
  const DUMMY_SERVICIOS = [
    { imgUrl: image1, id: 1, title: "Mecanico" },
    { imgUrl: image2, id: 2, title: "Plomeria" },
    { imgUrl: image3, id: 3, title: "Peluqueria" },
  ];
  return (
    <div className="flex flex-col bg-[#FEF4E2] px-10 py-10 gap-8">
      <div className="text-center">
        <h1 className="text-3xl font-black text-[#FE4C55]">
          "IMAGENES DE SERVICIOS"{" "}
        </h1>
        <h2 className="text-2xl text-[#5D5657] font-bold"></h2>
      </div>
      <div className="flex px-10 gap-5 justify-around ">
        {DUMMY_SERVICIOS.map((servicio) => (
          <ServiciosCard key={servicio.id} servicio={servicio}></ServiciosCard>
        ))}
      </div>
    </div>
  );
};

export default ServiciosContainer;
