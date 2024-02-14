import { OfrecemosCards } from "./component";
import { cn } from "@/lib/utils";

export const OfrecemosCard: React.FC<OfrecemosCards> = ({ card }) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center relative rounded-[15px] w-[400px] h-[235px]",
        card.id == 2 || card.id == 3 ? "bg-[#FEF4E2]" : "bg-[#FE4C55]"
      )}
    >
      <span
        className={cn(
          "px-5 py-[2px] font-bold absolute top-0 left-0 text-6xl",
          card.id == 2 || card.id == 3 ? "text-[#FE4C55]" : "text-[#FEF4E2]"
        )}
      >
        {card.id}
      </span>
      <p
        className={cn(
          "px-5 font-bold text-center text-2xl",
          card.id == 2 || card.id == 3 ? "text-[#FE4C55]" : "text-[#FEF4E2]"
        )}
      >
        {card.text}
      </p>
    </div>
  );
};
