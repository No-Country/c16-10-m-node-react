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

const RecomendacionesContainer = () => {
  const [serviviosRec, setServiciosRec] =
    useState<null | Array<ServicioProfesional>>(null);

  useEffect(() => {
    const fetchServicios = async () => {
      const res = await serviciosRecomendados();
      setServiciosRec(res.data);
    };

    fetchServicios();
    console.log(serviviosRec);
  }, []);

  /* 
category
comments
description
idProfessional
imagePost
nameProfessional
services
name
price
title
views
__v
_id
*/
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-16">
      <h1 className="px-5 py-3 rounded-xl font-bold text-3xl text-red-500 italic">
        SERVICIOS MAS FRECUENTES
      </h1>
      <Carousel className="bg-gray-200 shadow-3xl px-1 py-1 rounded-xl w-full">
        <CarouselContent className="flex gap-2 px-2 py-2 ">
          {serviviosRec?.map((recomendacion: ServicioProfesional) => (
            <CarouselItem
              key={recomendacion._id}
              className="rounded-xl md:basis-1/3 flex justify-center bg-transparent pr-2 pl-4 lg:basis-1/4 "
            >
              <RecomendacionesCard servicioProfesional={recomendacion} />
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
