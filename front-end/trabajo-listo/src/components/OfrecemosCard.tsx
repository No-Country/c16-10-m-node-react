import { OfrecemosCards } from "./component";

export const OfrecemosCard = ({ card }: { card: OfrecemosCards }) => {
  return (
    <article className="flex flex-col gap-4 bg-main-blue shadow-xl p-4 border-2 border-gray-700 rounded-xl ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row mr-4 self-center justify-center gap-4">
          {card.icon}
          <h3 className="font-bold text-3xl">{card.title}</h3>
        </div>
      </div>
      <p className=" justify-center mt-4 font-medium text-center text-gray-700 text-lg italic w-auto">
        {card.text}
      </p>
    </article>
  );
};
