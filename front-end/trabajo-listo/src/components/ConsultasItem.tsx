import { capitalizeFirstLetter } from "@/functions/textFunctions";
import { Consulta } from "./component";

const ConsultasItem = ({ consulta }: { consulta: Consulta }) => {
  return (
    <div className="shadow-md mt-1 p-1 rounded-md w-[98%] ">
      <div className="flex gap-3">
        <h1 className="font-semibold text-main-hover">
          {capitalizeFirstLetter(consulta.nameClient)} :
        </h1>
        <h1 className="font-normal">
          {capitalizeFirstLetter(consulta.textClient)}
        </h1>
      </div>
      <p className="ml-5 text-gray-500">{capitalizeFirstLetter("hola")}</p>
    </div>
  );
};

export default ConsultasItem;
