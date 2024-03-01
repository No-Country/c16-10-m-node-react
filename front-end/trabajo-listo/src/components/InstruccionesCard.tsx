import { cn } from "@/lib/utils";
import { Instruccion } from "./component";
import { FormSignUpModal } from "@/modals/FormSignUpModal";

const InstruccionesCard = ({ instruccion }: { instruccion: Instruccion }) => {
  return (
    <article className={cn(
      "mb-4 flex items-center flex-col sm:flex-col md:flex-row md:gap-4 justify-around w-full font-libre-franklin",
      instruccion.id === 2 && "flex-auto md:flex-row-reverse "
    )}>
      <div className="mb-4 flex shadow-xl rounded-xl w-4/5 sm:w-2/5 h-auto overflow-hidden">
        <img
          src={instruccion.imgUrl}
          alt={instruccion.title}
        />
      </div>
      <div className="gap-4 bg-white p-8 border-2 border-dashed border-gray-700 rounded-xl w-full sm:w-1/2">
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
          <FormSignUpModal className="bg-main-red hover:bg-main-hover rounded-none w-1/2 hover:text-white self-end" />
        )}
      </div>
    </article>
  );
};

export default InstruccionesCard;
