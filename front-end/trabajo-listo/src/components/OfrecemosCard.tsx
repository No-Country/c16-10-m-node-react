import { OfrecemosCards } from "./component";
import { cn } from "@/lib/utils";

export const OfrecemosCard: React.FC<OfrecemosCards> = ({ card }) => {
  return (
    <div className={cn("flex flex-col justify-start rounded-[15px] w-[400px] h-[235px] shadow-md transition-all duration-75 group hover:shadow-xl", card.id == 2 || card.id == 3 ? "bg-[#fffcfc]" : "bg-[#FE4C55]")}>
      <div className="h-[55px]">
        <div className="group-hover:w-[55px] group-hover:h-[55px] flex items-center justify-center bg-amber-800 mx-4 mt-3 border-[rgba(255,225,206,0.46)] border-2 rounded-full w-[50px] h-[50px] text-[#fffcfc] transition-all duration-75">
          {card.svg}
        </div>
      </div>
      <div>
        <h3 className={cn("font-bold italic mt-3 mb-2 px-5 text-3xl",card.id == 2 || card.id == 3 ? "text-[#FE4C55]" : "text-[#fffcfc]")}>{card.title}</h3>
        <p className={cn("font-semibold px-5 text-lg",card.id == 2 || card.id == 3 ? "text-[#FE4C55]" : "text-[#fffcfc]")}>
            {card.text}
        </p>
      </div>   
    </div>
  );
};
