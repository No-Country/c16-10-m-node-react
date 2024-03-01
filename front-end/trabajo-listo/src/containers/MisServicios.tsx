import { getProfesionalService } from "@/api/service.endpoint";
import RecomendacionesCard from "@/components/RecomendacionesCard";
import { ServicioProfesional } from "@/components/component";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MisServicios = ({
  id,
  usuarioId,
}: {
  id: string;
  usuarioId: string;
}) => {
  const [servicios, setServicios] = useState<null | Array<ServicioProfesional>>(
    null
  );

  const [actualizarServicio, setActualizarServicio] = useState(false);

  const refreshHandler = () => {
    setActualizarServicio(!actualizarServicio);
  };

  useEffect(() => {
    const llamada = async () => {
      if (usuarioId) {
        const value = await getProfesionalService(usuarioId);

        if (value && value?.data) {
          setServicios(value.data);
        } else {
          setServicios(null);
        }
      }
    };

    llamada();
  }, [id, actualizarServicio]);

  return (
    <div className="mb-[70px] h-auto">
      {servicios == null ? (
        <div className="flex flex-col justify-center items-center gap-5 border-slate-300 bg-white mt-[70px] border rounded-sm w-[700px] h-[270px]">
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
        <div className="mt-[25px] max-w-[1082px] h-auto">
          <h2 className="mb-3 font-bold text-2xl text-red-500 italic">
            {id === usuarioId ? "MIS SERVICIOS" : "SUS SERVICIOS"}
          </h2>
          <div className="flex flex-wrap gap-4 w-full h-auto">
            {servicios.map((el) => (
              <RecomendacionesCard
                key={el._id}
                servicioProfesional={el}
                onActualizar={refreshHandler}
              />
            ))}
            <Link to="/nuevo-servicio">
              <div className="flex flex-col justify-center items-center bg-white hover:bg-red-400 shadow-3xl border rounded-2xl w-[350px] h-[455px] text-red-500 hover:text-white transition-all duration-200 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <p className="font-semibold text-xl">
                  Agregar un nuevo servicio
                </p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
