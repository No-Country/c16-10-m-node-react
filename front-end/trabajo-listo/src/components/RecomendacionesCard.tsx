import { useEffect, useState } from "react";
import { ServicioProfesional, UserState } from "./component";
import { FaStar } from "react-icons/fa6";
import { getProfessional } from "@/api/user.endpoint";
import { useSelector } from "react-redux";
import { Receipt } from "lucide-react";

const RecomendacionesCard = ({
  servicioProfesional,
}: {
  servicioProfesional: ServicioProfesional | null;
}) => {
  const user = useSelector((state: { user: UserState }) => state.user);
  const [servicio, setServicio] = useState<UserState | null>(null);

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
    <article className="flex flex-col items-center border-black border-2 h-full font-libre-franklin">
      <img
        className="w-full h-full"
        src={servicioProfesional.imagePost}
      />
      <div className="flex flex-col justify-between bg-red-50 w-full">
        <picture className="flex items-center bg-red-100 p-2">
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
    </article>
  );
};

export default RecomendacionesCard;
