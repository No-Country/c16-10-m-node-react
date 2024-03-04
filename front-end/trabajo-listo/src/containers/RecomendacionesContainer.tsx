import RecomendacionesCard from "@/components/RecomendacionesCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { serviciosRecomendados } from "@/api/service.endpoint";
import { ServicioProfesional } from "@/components/component";
import Autoplay from "embla-carousel-autoplay";

const RecomendacionesContainer = () => {
  const [serviciosRec, setServiciosRec] =
    useState<null | Array<ServicioProfesional>>(null);

  //Peticion de servicios recomendados
  useEffect(() => {
    const fetchServicios = async () => {
      const res = await serviciosRecomendados();
      setServiciosRec(res.data);
    };

    fetchServicios();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center bg-main-red -mt-4 -mb-4 py-20 rounded-2xl w-[90%]">
      <h2 className="text-center mb-20 font-extrabold text-4xl text-white italic uppercase">
        Servicios más frecuentes
      </h2>
      <Carousel
        className="w-[90%]"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {serviciosRec?.map((servicio) => (
            <CarouselItem key={servicio._id} className="basis-auto xl:basis-2/5">
              <RecomendacionesCard servicioProfesional={servicio} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-3 size-10 text-main-red focus:outline-none focus-visible:ring-0 border-2 border-main-red 
        sm:-ml-1 sm:size-8
        md:-ml-2 md:size-12 
        lg:-ml-4 lg:size-14" />
        <CarouselNext className="mr-3 size-10 text-main-red focus:outline-none focus-visible:ring-0 border-2 border-main-red 
        sm:-mr-1 sm:size-8
        md:-mr-1 md:size-12 
        lg:-mr-4 lg:size-14" />
      </Carousel>
    </section>
  );
};
export default RecomendacionesContainer;
