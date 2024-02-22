import { getProfessional } from "@/api/user.endpoint";
import { MisServiciosLista } from "./component";
import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";

const RecomendacionesCard = ({
  servicioProfesional,
}: {
  servicioProfesional: MisServiciosLista;
}) => {
  useEffect(() => {
    console.log(servicioProfesional);

    const value = getProfessional(servicioProfesional.idProfessional);
    console.log(value);
  }, [servicioProfesional]);

  return (
    <div
      className="bg-white shadow-3xl rounded-2xl w-[350px] h-full overflow-hidden"
      key={servicioProfesional._id}
    >
      <div className=" ">
        <img
          className="rounded-lg w-full h-[219px] object-cover"
          src={servicioProfesional.imagePost}
        ></img>
      </div>
      <div className="flex flex-col gap-3 px-2 py-5 w-full ">
        <div className="flex ">
          <div className="flex items-center mr-2">
            <img className="rounded-full w-[3rem] h-[3rem] " src=""></img>
          </div>
          <div className="flex flex-col justify-around w-3/4">
            <div className="flex">
              <h3 className="pr-1 font-semibold text-[rgb(24,2,2)] text-ellipsis text-nowrap text-sm tracking-wider">
                {servicioProfesional.title}
              </h3>
              <span className="font-semibold text-sm italic">({0})</span>
            </div>
            <h3 className="font-normal text-slate-400 text-sm tracking-wider">{`De ${servicioProfesional.nameProfessional}`}</h3>
          </div>
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
          <p className="font-semibold">US ${0}</p>
        </div>
      </div>
    </div>
  );
};

export default RecomendacionesCard;
