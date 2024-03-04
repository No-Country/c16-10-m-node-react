import {
  capitalizeFirstLetter,
  capitalizeFirstLetterperSentence,
} from "@/functions/textFunctions";
import { ServicioProfesional, UserState } from "./component";
import { Rating, Tooltip } from "@mui/material";

//Card reutilizable del usuario
const CategoriaCard: React.FC<{
  user: UserState;
  servicioProfesional: ServicioProfesional;
  onPerfil: () => void;
}> = ({ user, servicioProfesional, onPerfil }) => {
  return (
    <picture onClick={onPerfil} className="flex items-center bg-main-blue p-2 ">
      <Tooltip title={user?.name}>
        <img
          className="rounded-full w-12 h-12 hover:cursor-pointer"
          src={user?.imageProfile}
        />
      </Tooltip>
      <div className="flex flex-col px-4 w-full">
        <h3 className="font-semibold text-black text-ellipsis text-nowrap">
          {capitalizeFirstLetter(servicioProfesional.title)}
        </h3>
        <div className="flex flex-col justify-between w-full">
          <span className="font-semibold text-gray-700 text-sm italic">
            {capitalizeFirstLetter(servicioProfesional?.services[0]?.name)}
          </span>
          <div className="flex items-center gap-1">
            <h3 className="text-xs">{`De ${capitalizeFirstLetterperSentence(user?.name)}`}</h3>
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
