import { OfrecemosCards } from "./component";


export const OfrecemosCard: React.FC<OfrecemosCards> = ({card}) => {
  return (
    <div className="flex flex-col rounded-[15px] w-[300px] h-[135px]" style={{backgroundColor: `${card.id == 2 || card.id == 3 ? "#FEF4E2" : "#FE4C55"}`}}>
        <span className="px-5 py-[2px] font-bold text-5xl text-orange-100" style={{color: `${card.id == 2 || card.id == 3 ? "#FE4C55" : "#FEF4E2"}`}}>{card.id}</span>
         <p className="px-5 font-bold text-center text-orange-100" style={{color: `${card.id == 2 || card.id == 3 ? "#FE4C55" : "#FEF4E2"}`}}>{card.text}</p>
    </div>
  )
}
