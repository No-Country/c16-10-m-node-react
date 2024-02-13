import { OfrecemosCard } from "@/components/OfrecemosCard"

export const OfrecemosContainer = () => {

    const CARDS = [
        {id: 1, text: "Intuitivo, pensado para todas las personas"},
        {id: 2, text: "Rápido, tu necesidad cumplida en simples pasos"},
        {id: 3, text: "Gratis, no tienes que mover un milímetro tu billetera"},
        {id: 4, text: "Efectivos a la hora de ser efectivos"}
    ]


  return (
    <section className="flex flex-col items-center justify-center gap-12 w-full h-[605px]">
        <h2 className="bg-[#FEF4E2] px-2 py-3 font-bold text-red-500 italic">¿POR QUÉ ELEGIR TRABAJO LISTO?</h2>
        <div className="flex flex-wrap gap-4 w-[620px] h-auto">
            {CARDS.map((card) => (
                <OfrecemosCard key={card.id} card={card}/>
            ))}
        </div>
    </section>
  )
}
