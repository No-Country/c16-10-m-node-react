import { ServiciosCardProps } from "./component";
import { cn } from "@/lib/utils";

const ServiciosCard = ({ servicio }: ServiciosCardProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-[120px] pb-2 pt-2 rounded-xl shadow-lg transition-all duration-75 hover:shadow-xl border-b-[1px]", servicio.id == 2 ? "flex-row-reverse pl-12 pr-2" : "pr-12 pl-2")}>
      <div className="flex justify-center">
        <img className="rounded-xl w-[400px] h-auto" src={servicio.imgUrl} alt={servicio.title} />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex">
          <span className="mr-1 font-bold text-[#FE4C55] text-3xl italic">{servicio.id}.</span>
          <h2 className="font-bold text-[rgb(24,2,2)] text-3xl italic">{servicio.title}</h2>
        </div>
        <p className="max-w-[400px] font-semibold text-md tracking-wider">{servicio.text}</p>
      </div>
    </div>
  );
};

export default ServiciosCard;
