import { Consulta } from "./component";

const ConsultasItem = ({ consulta }: { consulta: Consulta }) => {
  return (
    <div>
      <h1 className="font-semibold">{consulta.text}</h1>
      {consulta.respuesta?.map((respuesta) => (
        <p className="ml-5 text-gray-500" key={respuesta.id}>
          {respuesta.text}
        </p>
      ))}
    </div>
  );
};

export default ConsultasItem;
