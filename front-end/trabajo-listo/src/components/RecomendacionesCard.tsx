import { useEffect, useState } from "react";
import { ServicioProfesional, UserState } from "./component";
import { FaStar } from "react-icons/fa6";
import { getProfessional } from "@/api/user.endpoint";
import { useDispatch, useSelector } from "react-redux";
import { deleteServicio } from "@/api/service.endpoint";
import { notificacionesActions } from "@/store/notificacionesSlice";
import { Link, useParams } from "react-router-dom";
import { Receipt } from "lucide-react";
import { cn } from "@/lib/utils";

type RecomendacionesCardProps = {
  servicioProfesional: ServicioProfesional | null;
  onActualizar?: () => void; // Hacer onActualizar opcional
};

const RecomendacionesCard: React.FC<RecomendacionesCardProps> = ({ servicioProfesional, onActualizar }
) => {
  const user = useSelector((state: { user: UserState }) => state.user);
  const [servicio, setServicio] = useState<null | UserState>(null);
  const dispatch = useDispatch();
  const { id } = useParams()

  const handleDelete = async () => {
    if (servicioProfesional?._id) {
      const value = await deleteServicio(servicioProfesional?._id)
      console.log(value);
      if (value.status == 200) {
        dispatch(
          notificacionesActions.SUCCES({
            message: "Se eliminó el servicio correctamente",
          })
        );
        if (onActualizar) onActualizar()
      } else {
        dispatch(
          notificacionesActions.ERROR({
            message: "Hubo un error al borrar el servicio",
          })
        );
      }
    }
  }

  useEffect(() => {
    const fetchProfressional = async () => {
      if (servicioProfesional) {
        const res = await getProfessional(servicioProfesional.idProfessional);

        setServicio(res);
      }
    };

    fetchProfressional();
  }, [servicioProfesional, user.token]);

  if (!servicioProfesional) return;

  return (
    <article className={cn(
      "flex flex-col items-center border-gray-700 bg-white rounded-2xl overflow-hidden shadow-xl font-libre-franklin",
      id && "w-[350px] h-[455px]"
    )}>
      <div className="w-3/4 h-3/4">
        <img
          className="h-full object-cover"
          src={servicioProfesional.imagePost}
        />
      </div>
      <div className="flex flex-col justify-between bg-white w-full">
        <picture className="flex items-center bg-main-blue p-2">
          <img
            className="rounded-full w-12 h-12"
            src={servicio?.imageProfile}
          />
          <div className="flex flex-col px-4 w-full">
            <h3 className="font-semibold text-black text-ellipsis text-nowrap">
              {servicioProfesional.title}
            </h3>
            <div className="flex flex-col justify-between w-full">
              <span className="font-semibold text-gray-700 text-sm italic">
                {servicioProfesional?.services[0]?.name}
              </span>
              <h3 className="text-xs">
                {`De ${servicio?.name}`}
              </h3>
            </div>
          </div>
        </picture>
        <p className="p-4 italic truncate">
          {servicioProfesional.description}xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        <div className="flex flex-row-reverse justify-between p-2">
          <div className="flex items-center">
            <FaStar className="mr-2 text-yellow-400" />
            <FaStar className="mr-2 text-yellow-400" />
            <FaStar className="mr-2 text-yellow-400" />
            <FaStar className="mr-2 text-yellow-400" />
            <FaStar className="mr-2 text-yellow-400" />
          </div>
          <div className="flex text-emerald-500">
            <Receipt className="mr-1" />
            {servicioProfesional?.services[0]?.price}
          </div>
        </div>
      </div>
      {servicioProfesional.idProfessional === user.id && id && (
        <div className="right-3 bottom-2 flex gap-2">
          <button type="button" onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
          <Link to={`/editar-servicio/${servicioProfesional._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </Link>
        </div>
      )}

    </article>
  );
};

export default RecomendacionesCard;
