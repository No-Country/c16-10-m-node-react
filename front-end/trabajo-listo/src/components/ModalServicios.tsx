import CategoriaCard from "./CategoriaCard";
import { ServicioProfesional, UserState } from "./component";

import { Receipt } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import ConsultasContainer from "@/containers/ConsultasContainer";

const ModalServicios: React.FC<{
  user: UserState;
  servicioProfesional: ServicioProfesional;
}> = ({ user, servicioProfesional }) => {
  const [showConsultas, setShowconsultas] = useState(false);

  return (
    <div className="flex min-h-[20rem] max-h-[35rem]">
      <div className="flex flex-col justify-between gap-3 pr-4 w-1/2">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-3xl text-main-red">
            {servicioProfesional.title}
          </h1>
          <div className="shadow-md rounded-sm overflow-hidden">
            <CategoriaCard
              user={user}
              servicioProfesional={{ ...servicioProfesional, title: "" }}
            ></CategoriaCard>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            cum reprehenderit velit tempora, ab pariatur minus molestiae
            voluptates possimus culpa alias aperiam labore iste quos aut qui
            consequatur et!
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <textarea
            className="bg-gray-100 shadow-sm p-2 w-full outline-none resize-none"
            placeholder="Haz tu consulta..."
          ></textarea>
          <div className="flex justify-between items-center">
            <div className="flex text-emerald-500">
              <Receipt className="mr-1" />
              {servicioProfesional?.services[0]?.price}
            </div>
            <Button className="bg-main-red hover:bg-main-hover w-20 self-end">
              Contratar
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex gap-3 mb-3">
          <button
            onClick={() => {
              setShowconsultas(false);
            }}
            className={
              showConsultas
                ? "p-1 rounded-lg w-fit font-medium text-lg text-main-red hover:text-main-hover outline-none"
                : "p-1 rounded-lg w-fit font-medium text-lg bg-main-red text-main-blue outline-none"
            }
          >
            Imagen
          </button>
          <button
            onClick={() => {
              setShowconsultas(true);
            }}
            className={
              !showConsultas
                ? "p-1 rounded-lg w-fit font-medium text-lg text-main-red hover:text-main-hover outline-none"
                : "p-1 rounded-lg w-fit font-medium text-lg bg-main-red text-main-blue outline-none"
            }
          >
            Consultas
          </button>
        </div>
        {!showConsultas ? (
          <div className="flex flex-col justify-center items-center gap-7 ml-3">
            <div className="flex gap-3">
              <img
                className="shadow-xl rounded-lg w-[30rem] "
                src={servicioProfesional.imagePost}
              ></img>
            </div>
          </div>
        ) : (
          <ConsultasContainer />
        )}
      </div>
    </div>
  );
};

export default ModalServicios;
