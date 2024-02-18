import { ServicioProfesional } from "./component";
import { FaStar } from "react-icons/fa6";

const RecomendacionesCard = ({
  servicioProfesional,
}: {
  servicioProfesional: ServicioProfesional;
}) => {
  return (
    <div className="bg-white shadow-3xl rounded-2xl w-full h-full overflow-hidden">
      <div className="h-1/2 ">
        <img
          className="rounded-lg w-full max-h-1/2 "
          src={servicioProfesional.servicio.imgUrl}
        ></img>
      </div>
      <div className="flex flex-col gap-3 px-2 py-5 w-full h-ful ">
        <div className="flex h-1/2">
          <div className="flex items-center mr-2">
            <img
              className="rounded-full w-[3rem] "
              src={servicioProfesional.imgUrl}
            ></img>
          </div>
          <div className="flex flex-col justify-around w-3/4">
            <h3 className="pr-1 font-semibold text-[rgb(24,2,2)] text-ellipsis text-nowrap text-sm tracking-wider">
              {servicioProfesional.servicio.title}
            </h3>
            <h3 className="font-normal text-slate-400 text-sm tracking-wider">{`De ${servicioProfesional.nombre}`}</h3>
          </div>
        </div>
        <div className="">
          <p className="line-clamp-2 w-full h-[6ch] text-ellipsis ">
            {servicioProfesional.servicio.text}
          </p>
        </div>
        <div className="flex items-center gap-2 ">
          <FaStar className="text-yellow-400" />
          <p>{4.3}</p>
        </div>
        <div>
          <p>US5$</p>
        </div>
      </div>
    </div>
  );
};

export default RecomendacionesCard;
