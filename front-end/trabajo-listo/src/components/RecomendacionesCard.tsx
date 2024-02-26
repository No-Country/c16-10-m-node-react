import { useEffect, useState } from "react";
import { ServicioProfesional, UserState } from "./component";
import { FaStar } from "react-icons/fa6";
import { getProfessional } from "@/api/user.endpoint";
import { useDispatch, useSelector } from "react-redux";
import { deleteServicio } from "@/api/service.endpoint";
import { notificacionesActions } from "@/store/notificacionesSlice";
import { Link } from "react-router-dom";

type RecomendacionesCardProps = {
  servicioProfesional: ServicioProfesional | null;
  onActualizar?: () => void; // Hacer onActualizar opcional
};

const RecomendacionesCard: React.FC<RecomendacionesCardProps> = ({servicioProfesional, onActualizar}
  ) => {
  const user = useSelector((state: { user: UserState }) => state.user);
  const [servicio, setServicio] = useState<null | UserState>(null);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if(servicioProfesional?._id){
       const value = await deleteServicio(servicioProfesional?._id)
       console.log(value);
       if(value.status == 200){
        dispatch(
          notificacionesActions.SUCCES({
            message: "Se eliminó el servicio correctamente",
          })
        );
        if(onActualizar) onActualizar()
       }else{
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
    <div className="relative bg-white shadow-3xl rounded-2xl w-[350px] h-full overflow-hidden">
      <div className="">
        <img
          className="rounded-lg w-full h-[219px] object-cover"
          src={servicioProfesional.imagePost}
        ></img>
      </div>
      <div className="flex flex-col gap-2 px-2 py-5 w-full ">
        <div>
          <div className="flex ">
            <div className="flex items-center mr-2">
              <img
                className="rounded-full w-[3rem] h-[3rem]"
                src={servicio?.imageProfile}
              ></img>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="pr-1 font-semibold text-[rgb(24,2,2)] text-ellipsis text-nowrap text-sm tracking-wider">
                {servicioProfesional.title}
              </h3>
              <h3 className="font-normal text-slate-400 text-sm tracking-wider">{`De ${servicio?.name}`}</h3>
            </div>
          </div>
          <p className="mt-1 font-semibold text-sm text-zinc-600">
            {servicioProfesional?.services[0]?.name}
          </p>
        </div>
        <div className="">
          <p className="line-clamp-2 w-full h-[6ch] text-ellipsis ">
            {servicioProfesional.description}
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <FaStar className="text-yellow-400" />
          <p>{4.3}</p>
        </div>
        <div>
          <p className="font-semibold">{`US $${servicioProfesional?.services[0]?.price}`}</p>
        </div>
      </div>
      {servicioProfesional.idProfessional == user.id && (
        <div className="right-3 bottom-2 absolute flex gap-2">
          <button type="button" onClick={handleDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
          <Link to={`/editar-servicio/${servicioProfesional._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
            </svg>
          </Link>
        </div>
      )}
      
    </div>
  );
};

export default RecomendacionesCard;
