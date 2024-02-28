import { serviciosCategory } from "@/api/service.endpoint";
import { useEffect, useState } from "react";
import { BotonCat, ServicioProfesional } from "./component";
import { cn } from "@/lib/utils";
import { notificacionesActions } from "@/store/notificacionesSlice";
import { useDispatch } from "react-redux";

export const CatServiceCard = ({ el, estado, setServicios, eliminar }: { el: BotonCat, estado: string, setServicios: (data: Array<ServicioProfesional>) => void, eliminar: (value: string) => void })=> {
    const [isActive, setIsActive] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
      if(el.name === estado){
        setIsActive(!isActive)
      }
    }, [estado])
    
    const handleAddCategory = async (cat: string) => {
        
        if(isActive){
            eliminar(el.name)
        }else{
            const categoria = await serviciosCategory(cat)
            if(categoria){
                const data = categoria.data
                setServicios(data)
                console.log(data);
            }else{
                console.log("hola");
                dispatch(
                    notificacionesActions.NORMAL({
                      message: `Todavía no hay servicios en la categoría ${cat}`,
                    })
                );
            }
            
        }
        setIsActive(!isActive)
      }

  return (
    <div>
        <button onClick={() => handleAddCategory(el.name)} type="button" className={cn("flex flex-col justify-center items-center gap-3 border-[#0E7490] border rounded-3xl w-[190px] h-[150px] text-[#0E7490]", isActive ? "bg-[#0E7490] text-white" : "bg-transparent")}>
            {el.svg}
            <h3 className="text-center">{el.nick}</h3>
        </button>
    </div>
  )
}
