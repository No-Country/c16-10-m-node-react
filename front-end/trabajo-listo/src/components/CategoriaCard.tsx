import { ServicioProfesional, UserState } from "./component";
import { Rating } from "@mui/material";

const CategoriaCard: React.FC<{
  user: UserState;
  servicioProfesional: ServicioProfesional;
}> = ({ user, servicioProfesional }) => {

  return (
    <picture className="flex items-center bg-main-blue p-2">
      <img className="rounded-full w-12 h-12" src={user?.imageProfile} />
      <div className="flex flex-col px-4 w-full">
        <h3 className="font-semibold text-black text-ellipsis text-nowrap">
          {servicioProfesional.title}
        </h3>
        <div className="flex flex-col justify-between w-full">
          <span className="font-semibold text-gray-700 text-sm italic">
            {servicioProfesional?.services[0]?.name}
          </span>
          <div className="flex items-center gap-1">
            <h3 className="text-xs">{`De ${user?.name}`}</h3>
            <Rating
              name="read-only"
              readOnly
              value={3.5}
              precision={0.5}
              size="small"
            />
          </div>
        </div>
      </div>
    </picture>
  );
};

export default CategoriaCard;
