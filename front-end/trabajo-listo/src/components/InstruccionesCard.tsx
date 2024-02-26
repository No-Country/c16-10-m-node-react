import { cn } from "@/lib/utils";
import { Instruccion } from "./component";
import { FormSignUpModal } from "@/modals/FormSignUpModal";

const InstruccionesCard = ({ instruccion }: { instruccion: Instruccion }) => {
  return (
    <article className={cn(
      "flex items-center justify-around w-full font-libre-franklin",
      instruccion.id === 2 && "flex-row-reverse"
    )}>
      <img
        className="w-2/5 h-auto"
        src={instruccion.imgUrl}
        alt={instruccion.title}
      />
      <div className="flex flex-col gap-4 p-8 border-black border-2 border-dashed w-1/2">
        <h2 className="font-bold text-3xl uppercase">
          <span className="mr-2 font-bold text-3xl text-main-red">
            {instruccion.id}.
          </span>
          {instruccion.title}
        </h2>
        <p className="font-semibold text-gray-700 text-md tracking-wide italic">
          {instruccion.text}
        </p>
        {instruccion.id === 1 && (
          <FormSignUpModal className="bg-main-red hover:bg-red-700 rounded-none w-1/2 hover:text-white self-end" />
        )}
      </div>
    </article>
  );
};

export default InstruccionesCard;
