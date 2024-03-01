import ConsultasItem from "@/components/ConsultasItem";
import { Consulta, ServicioProfesional } from "@/components/component";

const ConsultasContainer = ({
  consulta,
  servicioProfesional,
  updateConsultas,
}: {
  consulta: Array<Consulta>;
  servicioProfesional: ServicioProfesional;
  updateConsultas: (value: Array<Consulta>) => void;
}) => {
  return (
    <div className="flex flex-col gap-7 ml-3 ">
      {consulta && consulta?.length === 0 ? (
        <div className="flex justify-center items-center min-h-[15rem]">
          <h1 className="font-semibold text-xl text-zinc-600">
            No se realizaron consultas para este servicio
          </h1>
        </div>
      ) : (
        <div className="flex flex-col gap-3 bg-main-blue pl-4 max-h-[25rem] overflow-y-scroll ">
          {consulta.map((consulta, index) => (
            <ConsultasItem
              key={consulta.id + index}
              consulta={consulta}
              servicioProfesional={servicioProfesional}
              updateConsultas={updateConsultas}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsultasContainer;
