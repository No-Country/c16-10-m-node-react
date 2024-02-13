import { ServiciosCardProps } from "./component";

const ServiciosCard: React.FC<ServiciosCardProps> = ({ servicio }) => {
  return (
    <div className=" shadow-md flex flex-col gap-3 w-2/4 bg-[#FE4C55] rounded-xl px-2 py-2  ">
      <p className=" text-center font-medium text-2xl text-[#FEF4E2]">
        {servicio.title}
      </p>
      <div className="flex gap-3 p-2">
        <img className="h-60 w-60 rounded-xl " src={servicio.imgUrl}></img>
        <p className="font-medium text-l text-[#FEF4E2]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit integer
          himenaeos, sapien a feugiat rutrum commodo malesuada dis viverra,
          faucibus pulvinar ultricies tellus purus euismod gravida venenatis.
        </p>
      </div>
    </div>
  );
};

export default ServiciosCard;
