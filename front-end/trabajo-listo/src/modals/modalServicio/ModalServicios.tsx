import {
  Consulta,
  ServicioProfesional,
  UserState,
} from "../../components/component";
import { useState } from "react";
import ConsultasContainer from "@/modals/modalServicio/ConsultasContainer";
import BarModalservicios from "./BarModalservicios";
import DetailServicio from "./DetailServicio";

const ModalServicios: React.FC<{
  user: UserState;
  servicioProfesional: ServicioProfesional;
  onClose: () => void;
}> = ({ user, servicioProfesional, onClose }) => {
  const [showConsultas, setShowconsultas] = useState(false);
  const [sendConsulta, setSendConsulta] = useState(false);
  const [consultas, setConsultas] = useState<Array<Consulta>>(
    servicioProfesional.comments
  );

  return (
    <div className="flex min-h-[20rem] max-h-[35rem]">
      <DetailServicio
        user={user}
        servicioProfesional={servicioProfesional}
        onClose={onClose}
        setConsultas={setConsultas}
        setShowconsultas={setShowconsultas}
        setSendConsulta={setSendConsulta}
      />
      <div className="flex flex-col items-center">
        <BarModalservicios
          setShowconsultas={setShowconsultas}
          showConsultas={showConsultas}
        />
        {!showConsultas ? (
          <div className="flex mx-auto justify-center">
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
            scrollLast={sendConsulta}
            scrollhandler={setSendConsulta}
          />
        )}
      </div>
    </div>
  );
};

export default ModalServicios;
