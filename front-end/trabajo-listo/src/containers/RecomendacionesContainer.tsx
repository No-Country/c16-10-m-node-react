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
    <section className="flex flex-col items-center justify-center bg-main-red -mt-4 -mb-4 py-20 rounded-2xl w-[90%]">
      <h2 className="mb-20 font-extrabold text-4xl text-center text-white uppercase italic">
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
            <CarouselItem key={servicio._id} className="lg:basis-1/3 md:basis-1/2 sm:basis-1">
              <RecomendacionesCard servicioProfesional={servicio} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-3 sm:-ml-1 md:-ml-2 lg:-ml-8 border-2 border-main-red text-main-red size-10 focus:outline-none focus-visible:ring-0 sm:size-8 md:size-12 lg:size-14" />
        <CarouselNext className="mr-3 sm:-mr-1 md:-mr-1 lg:-mr-8 border-2 border-main-red text-main-red size-10 focus:outline-none focus-visible:ring-0 sm:size-8 md:size-12 lg:size-14" />
      </Carousel>
    </section>
  );
};
export default RecomendacionesContainer;
