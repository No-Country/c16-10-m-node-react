import { OfrecemosCards } from "./component";

export const OfrecemosCard = ({ card }: { card: OfrecemosCards }) => {
  return (
    <article className="flex flex-col items-center gap-4 bg-white p-4 border-black border-2 w-1/4">
      {card.icon}
      <h3 className="font-bold text-3xl">
        {card.title}
      </h3>
      <p className="mt-4 font-medium text-center text-gray-700 text-lg italic">
        {card.text}
      </p>
    </article>
  );
};
