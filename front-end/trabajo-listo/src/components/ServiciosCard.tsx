import { ServiciosCardProps } from "./component";

const ServiciosCard: React.FC<ServiciosCardProps> = ({ servicio }) => {
  return (
    <div className="flex flex-col gap-3 bg-red-400 pb-2 border-red-400 rounded-xl w-80 ">
      <p className="mt-3 font-medium text-[#FEF4E2] text-2xl text-center ">
        {servicio.title}
      </p>
      <div className="flex flex-col gap-3 pt-3 rounded-b-xl">
        <img className=" " src={servicio.imgUrl}></img>
        <p className="flex-1 px-2 rounded-b-xl font-medium text-[#FEF4E2] text-center self-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit integer
          himenaeos, sapien a feugiat rutrum commodo malesuada dis viverra,
          faucibus pulvinar ultricies tellus purus euismod gravida venenatis.
        </p>
      </div>
    </div>
  );
};

export default ServiciosCard;
