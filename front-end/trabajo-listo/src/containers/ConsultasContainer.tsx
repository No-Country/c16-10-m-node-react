import ConsultasItem from "@/components/ConsultasItem";
import { Consulta } from "@/components/component";

const ConsultasContainer = ({ consulta }: { consulta: Array<Consulta> }) => {
  return (
    <div className="flex flex-col gap-7 ml-3">
      <div className="flex flex-col gap-3 bg-main-blue pl-4 max-h-[25rem] overflow-y-scroll ">
        {consulta.map((consulta, index) => (
          <ConsultasItem key={consulta.idClient + index} consulta={consulta} />
        ))}
      </div>
    </div>
  );
};

export default ConsultasContainer;
