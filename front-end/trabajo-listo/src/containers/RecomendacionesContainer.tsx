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
    <section className="z-10 flex flex-col items-center bg-main-red -mt-4 -mb-4 py-20 rounded-2xl w-[90%]">
      <h2 className="mb-20 font-extrabold text-4xl text-white italic uppercase">
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
            <CarouselItem key={servicio._id} className="basis-1/3">
              <RecomendacionesCard servicioProfesional={servicio} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-ml-12 w-16 h-16 focus-visible:ring-0 focus-visible:ring-offset-0 border-2 border-main-red" />
        <CarouselNext className="-mr-12 w-16 h-16 focus-visible:ring-0 focus-visible:ring-offset-0 border-2 border-main-red" />
      </Carousel>
    </section>
  );
};
export default RecomendacionesContainer;
