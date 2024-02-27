import ConsultasItem from "@/components/ConsultasItem";
import { Consulta } from "@/components/component";

const ConsultasContainer = () => {
  const DUMMY_COMENTARIOS: Array<Consulta> = [
    {
      id: "1",
      text: "¿Cuanto demora el trabajo?",
      idUser: "1",
      respuesta: [{ id: "1", text: "Alrededor de una hora" }],
    },
    {
      id: "2",
      text: "¿Llegas a cualquier zona de Bs. As.?",
      idUser: "2",
      respuesta: [{ id: "1", text: "Alrededor de una hora" }],
    },
    {
      id: "3",
      text: "¿Llegas a cualquier zona de Bs. As.?",
      idUser: "2",
      respuesta: [{ id: "1", text: "Alrededor de una hora" }],
    },
    {
      id: "4",
      text: "¿Llegas a cualquier zona de Bs. As.?",
      idUser: "2",
      respuesta: [{ id: "1", text: "Alrededor de una hora" }],
    },
    {
      id: "5",
      text: "¿Llegas a cualquier zona de Bs. As.?",
      idUser: "2",
      respuesta: [{ id: "1", text: "Alrededor de una hora" }],
    },
    {
      id: "6",
      text: "¿Llegas a cualquier zona de Bs. As.?",
      idUser: "2",
      respuesta: [{ id: "1", text: "Alrededor de una hora" }],
    },
    {
      id: "7",
      text: "¿Llegas a cualquier zona de Bs. As.?",
      idUser: "2",
      respuesta: [{ id: "1", text: "Alrededor de una hora" }],
    },
    {
      id: "8",
      text: "¿Llegas a cualquier zona de Bs. As.?",
      idUser: "2",
      respuesta: [{ id: "1", text: "Alrededor de una hora" }],
    },
    {
      id: "9",
      text: "¿Llegas a cualquier zona de Bs. As.?",
      idUser: "2",
      respuesta: [{ id: "1", text: "Alrededor de una hora" }],
    },
  ];
  return (
    <div className="flex flex-col gap-7 ml-3">
      <div className="flex flex-col gap-3 bg-main-blue pl-4 max-h-[25rem] overflow-y-scroll ">
        {DUMMY_COMENTARIOS.map((consulta: Consulta) => (
          <ConsultasItem key={consulta.id} consulta={consulta} />
        ))}
      </div>
    </div>
  );
};

export default ConsultasContainer;
