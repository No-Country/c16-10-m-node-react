import { getProfesionalService } from "@/api/service.endpoint";
import RecomendacionesCard from "@/components/RecomendacionesCard";
import { ServicioProfesional } from "@/components/component";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MisServicios = ({ id }: { id: string }) => {
  const [servicios, setServicios] = useState<null | Array<ServicioProfesional>>(
    null
  );

  useEffect(() => {
    const llamada = async () => {
      if (id) {
        const value = await getProfesionalService(id);
        console.log(value);

        if (value?.data) setServicios(value.data);
      }
    };

    llamada();
  }, [id]);

  return (
    <div>
      {servicios == null ? (
        <div className="flex flex-col items-center justify-center gap-5 bg-white mt-[70px] border border-slate-300 rounded-sm w-[700px] h-[270px]">
          <h2 className="font-semibold text-xl text-zinc-600">
            Todavia no tienes ningún servicio, ¿Deseas agregar alguno?
          </h2>
          <Link to="/nuevo-servicio">
            <button
              className="bg-red-500 px-5 py-3 rounded-sm font-semibold text-white"
              typeof="button"
            >
              Agregar Servicio
            </button>
          </Link>
        </div>
      ) : (
        <div className="mt-[25px] ">
          <h2 className="mb-3 font-bold text-2xl text-red-500 italic">
            MIS SERVICIOS
          </h2>
          <div className="flex gap-4">
            {servicios.map((el) => (
              <RecomendacionesCard key={el._id} servicioProfesional={el} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
