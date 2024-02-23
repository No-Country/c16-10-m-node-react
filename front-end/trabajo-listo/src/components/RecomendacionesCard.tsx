import { useEffect, useState } from "react";
import { ServicioProfesional, UserState } from "./component";
import { FaStar } from "react-icons/fa6";
import { getProfessional } from "@/api/user.endpoint";
import { useSelector } from "react-redux";

const RecomendacionesCard = ({
  servicioProfesional,
}: {
  servicioProfesional: ServicioProfesional | null;
}) => {
  const user = useSelector((state: { user: UserState }) => state.user);
  const [servicio, setServicio] = useState<null | UserState>(null);

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
    <div className="bg-white shadow-3xl rounded-2xl w-[350px] h-full overflow-hidden">
      <div className="">
        <img
          className="rounded-lg w-full h-[219px] object-cover"
          src={servicioProfesional.imagePost}
        ></img>
      </div>
      <div className="flex flex-col gap-3 px-2 py-5 w-full ">
        <div className="flex ">
          <div className="flex items-center mr-2">
            <img
              className="rounded-full w-[3rem] h-[3rem]"
              src={servicio?.imageProfile}
            ></img>
          </div>
          <div className="flex flex-col justify-around w-3/4">
            <div className="flex">
              <h3 className="pr-1 font-semibold text-[rgb(24,2,2)] text-ellipsis text-nowrap text-sm tracking-wider">
                {servicioProfesional.title}
              </h3>
              <span className="font-semibold text-sm text-zinc-600">
                ({servicioProfesional?.services[0]?.name})
              </span>
            </div>

            <h3 className="font-normal text-slate-400 text-sm tracking-wider">{`De ${servicio?.name}`}</h3>
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
          <p className="font-semibold">{`US $${servicioProfesional?.services[0]?.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default RecomendacionesCard;
