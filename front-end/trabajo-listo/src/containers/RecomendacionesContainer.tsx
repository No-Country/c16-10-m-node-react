import RecomendacionesCard from "@/components/RecomendacionesCard";
import image1 from "../assets/fiverimg1.webp";
import image2 from "../assets/fiverimg2.webp";
import image3 from "../assets/fiverimg3.jpg";
import profesional1 from "../assets/profesional1.jpg";
import profesional2 from "../assets/profesional2.jpg";
import profesional3 from "../assets/profesional3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RecomendacionesContainer = () => {
  const RECOMENDACIONES = [
    {
      imgUrl: profesional1,
      id: 1,
      nombre: "Alberto",
      servicio: {
        imgUrl: image1,
        id: 1,
        title: "Servicio mecánico",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer himenaeos, sapien a feugiat rutrum commodo malesuada dis viverra, faucibus pulvinar ultricies tellus purus euismod gravida.",
        nombre: "",
      },
    },
    {
      imgUrl: profesional2,
      id: 2,
      nombre: "Roberto",
      servicio: {
        imgUrl: image2,
        id: 2,
        title: "Servicio plomería",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer himenaeos, sapien a feugiat rutrum commodo malesuada dis viverra, faucibus pulvinar ultricies tellus purus euismod gravida.",
        nombre: "",
      },
    },
    {
      imgUrl: profesional3,
      id: 3,
      nombre: "Alfredo",
      servicio: {
        imgUrl: image3,
        id: 3,
        title: "Peluquería",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer himenaeos, sapien a feugiat rutrum commodo malesuada dis viverra, faucibus pulvinar ultricies tellus purus euismod gravida.",
        nombre: "",
      },
    },
    {
      imgUrl: profesional1,
      id: 4,
      nombre: "Alberto",
      servicio: {
        imgUrl: image1,
        id: 4,
        title: "Servicio mecánico",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer himenaeos, sapien a feugiat rutrum commodo malesuada dis viverra, faucibus pulvinar ultricies tellus purus euismod gravida.",
        nombre: "",
      },
    },
    {
      imgUrl: profesional2,
      id: 5,
      nombre: "Roberto",
      servicio: {
        imgUrl: image2,
        id: 5,
        title: "Servicio plomería",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer himenaeos, sapien a feugiat rutrum commodo malesuada dis viverra, faucibus pulvinar ultricies tellus purus euismod gravida.",
        nombre: "",
      },
    },
    {
      imgUrl: profesional3,
      id: 6,
      nombre: "Alfredo",
      servicio: {
        imgUrl: image3,
        id: 6,
        title: "Peluquería",
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integer himenaeos, sapien a feugiat rutrum commodo malesuada dis viverra, faucibus pulvinar ultricies tellus purus euismod gravida.",
        nombre: "",
      },
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-16">
      <h1 className="px-5 py-3 rounded-xl font-bold text-3xl text-red-500 italic">
        SERVICIOS MAS FRECUENTES
      </h1>
      <Carousel className="bg-gray-200 shadow-3xl px-1 py-1 rounded-xl w-full">
        <CarouselContent className="flex gap-2 px-2 py-2 ">
          {RECOMENDACIONES.map((recomendacion) => (
            <CarouselItem className="rounded-xl md:basis-1/3 flex justify-center bg-transparent pr-2 pl-4 lg:basis-1/4 ">
              <RecomendacionesCard
                key={recomendacion.id}
                servicioProfesional={recomendacion}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-[2.5rem] h-[2.5rem] focus-visible:ring-0 focus-visible:ring-offset-0 " />
        <CarouselNext className="w-[2.5rem] h-[2.5rem] focus-visible:ring-0 focus-visible:ring-offset-0 " />
      </Carousel>
    </div>
  );
};

export default RecomendacionesContainer;
