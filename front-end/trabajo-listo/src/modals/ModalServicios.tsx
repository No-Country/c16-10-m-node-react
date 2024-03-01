import CategoriaCard from "../components/CategoriaCard";
import {
  Consulta,
  ServicioProfesional,
  UserState,
} from "../components/component";

import { Receipt } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";
import ConsultasContainer from "@/containers/ConsultasContainer";
import { useDispatch, useSelector } from "react-redux";
import { IoMdSend } from "react-icons/io";
import { postConsulta } from "@/api/consulta.endpoint";
import { getUnServicio } from "@/api/service.endpoint";
import { capitalizeFirstLetter } from "@/functions/textFunctions";
import { notificacionesActions } from "@/store/notificacionesSlice";
import { useNavigate } from "react-router-dom";

const ModalServicios: React.FC<{
  user: UserState;
  servicioProfesional: ServicioProfesional;
  onClose: () => void;
}> = ({ user, servicioProfesional, onClose }) => {
  const [showConsultas, setShowconsultas] = useState(false);
  const [consulta, setConsulta] = useState("");
  const [consultas, setConsultas] = useState<Array<Consulta>>(
    servicioProfesional.comments
  );
  const navigate = useNavigate();
  const currentUser = useSelector((state: { user: UserState }) => state.user);

  const dispatch = useDispatch();

  //Crea una nueva consulta en el post del servicio profesional
  const consultaHandler = async () => {
    const currentConsulta = {
      nameClient: currentUser.name,
      textClient: consulta,
    };
    try {
      await postConsulta(servicioProfesional._id, currentConsulta);
      const res = await getUnServicio(servicioProfesional._id);
      setConsultas(res.data.comments);
      console.log(res.data.comments, "data consultas");
      setShowconsultas(true);
    } catch (error) {
      console.error("Error al obtener los datos: ", error);
      throw error;
    }
  };

  //Contrata el servicio y notifica al usuario
  const contratarHandler = () => {
    onClose();
    dispatch(notificacionesActions.SUCCES({ message: "Contratado con exito" }));
  };
  //Redirige al perfil del profesional
  const perfilHandler = () => {
    navigate(`/perfil/${servicioProfesional.idProfessional}`);
  };

  return (
    <div className="flex min-h-[20rem] max-h-[35rem]">
      <div className="flex flex-col justify-between gap-3 pr-4 w-1/2">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-3xl text-main-red ca">
            {capitalizeFirstLetter(servicioProfesional.title)}
          </h1>
          <div className="shadow-md rounded-sm overflow-hidden">
            <CategoriaCard
              onPerfil={() => perfilHandler()}
              user={user}
              servicioProfesional={{ ...servicioProfesional, title: "" }}
            ></CategoriaCard>
          </div>
          <p className="">
            {capitalizeFirstLetter(servicioProfesional.description)}
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {currentUser?.token && (
            <div className="flex gap-2">
              <textarea
                name="consulta"
                value={consulta}
                onChange={(event) => setConsulta(event.target.value)}
                className="bg-gray-100 shadow-sm p-2 w-full outline-none resize-none"
                placeholder="Haz tu consulta..."
              ></textarea>
              <button
                onClick={consultaHandler}
                className="flex justify-center items-center rounded-md w-[40px] h-full self-center"
              >
                <IoMdSend className="text-3xl text-main-hover hover:text-main-red" />
              </button>
            </div>
          )}
          <div className="flex justify-between items-center">
            <div className="flex text-emerald-500">
              <Receipt className="mr-1" />
              {servicioProfesional?.services[0]?.price}
            </div>
            {currentUser?.token && (
              <Button
                onClick={contratarHandler}
                className="bg-main-red hover:bg-main-hover w-20 self-end"
              >
                Contratar
              </Button>
            )}
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
                ? "p-2 rounded-lg w-fit font-medium text-lg text-main-red hover:text-main-hover outline-none"
                : "p-2 rounded-lg w-fit font-medium text-lg bg-main-red text-main-blue outline-none"
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
                ? "p-2 rounded-lg w-fit font-medium text-lg text-main-red hover:text-main-hover outline-none"
                : "p-2 rounded-lg w-fit font-medium text-lg bg-main-red text-main-blue outline-none"
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
          <ConsultasContainer
            servicioProfesional={servicioProfesional}
            consulta={consultas}
            updateConsultas={(value) => setConsultas(value)}
          />
        )}
      </div>
    </div>
  );
};

export default ModalServicios;
