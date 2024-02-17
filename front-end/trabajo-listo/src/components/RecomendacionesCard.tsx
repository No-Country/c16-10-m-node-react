import { ServicioProfesionalprops } from "./component";

const RecomendacionesCard = ({
  servicioProfesional,
}: ServicioProfesionalprops) => {
  return (
    <div className="shadow-2xl rounded-2xl overflow-hidden">
      <div className="">
        <img src={servicioProfesional.servicio.imgUrl}></img>
      </div>
      <div className="flex ">
        <div className="flex items-center justify-center p-2 w-1/4">
          <img
            className="rounded-full w-[10rem]"
            src={servicioProfesional.imgUrl}
          ></img>
        </div>
        <div className="flex-col items-center p-3 w-3/4">
          <h3 className="">{servicioProfesional.servicio.title}</h3>
          <h3>{`De ${servicioProfesional.nombre}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default RecomendacionesCard;
