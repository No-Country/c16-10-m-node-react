import { serviciosCategory } from "@/api/service.endpoint";
import { useEffect, useState } from "react";
import { BotonCat, ServicioProfesional } from "./component";
import { cn } from "@/lib/utils";
import { notificacionesActions } from "@/store/notificacionesSlice";
import { useDispatch } from "react-redux";

export const CatServiceCard = ({ el, estado, getTodos, todos, setServicios, eliminar }: { el: BotonCat, estado: string, getTodos: () => void, todos: boolean, setServicios: (data: Array<ServicioProfesional>) => void, eliminar: (value: string) => void })=> {
    const [isActive, setIsActive] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        if(el.name === "todos"){
          if(!todos){
            setIsActive(false)
          }else{
            setIsActive(true)
          }
        }else{
          if(el.name === estado && el.name !== "todos"){
            setIsActive(true)
          }else{
            setIsActive(false)
          }
        }
    }, [estado, el.name])
    
    const handleAddCategory = async (cat: string) => {
        
        if(isActive){
            eliminar(el.name)
            setIsActive(false)
        }else{
            if(el.name !== "todos"){
              const categoria = await serviciosCategory(cat)
              if(categoria){
                  const data = categoria.data
                  setServicios(data)
                  console.log(data);
                  setIsActive(true)
              }else{
                  console.log("hola");
                  dispatch(
                      notificacionesActions.NORMAL({
                        message: `Todavía no hay servicios en la categoría ${cat}`,
                      })
                  );
                  setIsActive(false)
              }
            }else{
              getTodos()
              setIsActive(false)
            } 
        }
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
