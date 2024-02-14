import { Link } from "react-router-dom"

export const TuNecesidad = () => {
  return (
    <div className="flex items-center justify-center gap-[100px] bg-[#FE4C55] w-full h-[200px]">
        <div>
            <h3 className="font-bold text-[#FEF4E2] text-xl italic">ENCUENTRA TU NECESIDAD</h3>
            <p className="text-white">Soluciona un problema en pocos pasos!</p>
        </div>
        <Link to="/search" className="flex">
            <div className="bg-slate-100 px-12 py-2 rounded-s-[10px] font-bold text-[#FE4C55] italic">
                <button className="ml-4 border-b-[1px] border-[#FE4C55] h-[22px] italic m">Buscar</button>
            </div>
            <div className="flex justify-center bg-slate-100 rounded-e-[10px] w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bg-slate-100 h-10 text-[#FE4C55]" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </div>
        </Link>
    </div>
  )
}
