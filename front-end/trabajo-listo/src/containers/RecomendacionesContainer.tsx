import RecomendacionesCard from "@/components/RecomendacionesCard";
import image1 from "../assets/imageServicio1.png";
import image2 from "../assets/imageServicio2.png";
import image3 from "../assets/imageServicio3.png";
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
        text: "",
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
        text: "",
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
        text: "",
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
        text: "",
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
        text: "",
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
        text: "",
        nombre: "",
      },
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-16 ">
      <h1 className="px-5 py-3 rounded-xl font-bold text-3xl text-red-500 italic">
        SERVICIOS MAS FRECUENTES
      </h1>
      <Carousel className="w-4/5 ">
        <CarouselContent className="bg-white">
          {RECOMENDACIONES.map((recomendacion) => {
            return (
              <CarouselItem className="basis-1/3">
                <RecomendacionesCard
                  key={recomendacion.id}
                  servicioProfesional={recomendacion}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="w-[2.5rem] h-[2.5rem] focus-visible:ring-0 focus-visible:ring-offset-0 mr-4" />
        <CarouselNext className="w-[2.5rem] h-[2.5rem] focus-visible:ring-0 focus-visible:ring-offset-0 ml-12" />
      </Carousel>
    </div>
  );
};

export default RecomendacionesContainer;
