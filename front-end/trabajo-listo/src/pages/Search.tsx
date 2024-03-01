import { serviciosCategory, serviciosRecomendados } from "@/api/service.endpoint"
import { CatServiceCard } from "@/components/CatServiceCard"
import RecomendacionesCard from "@/components/RecomendacionesCard"
import { ServicioProfesional } from "@/components/component"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { notificacionesActions } from "@/store/notificacionesSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"  

export const Search = () => {
    const [servicios, setServicios] = useState<Array<ServicioProfesional>>([])
    const [clave, setClave] = useState(false)
    const dispatch = useDispatch();
    const [serviciosPrev, setServiciosPrev] = useState<Array<ServicioProfesional>>([])
    const [searchValue, setSearchValue] = useState("");
    const [estado, setEstado] = useState("")
    const [todos, setTodos] = useState(false)
    const location = useLocation();
    const service = location.state?.id;
    const buscarServicio = location.state?.buscar
    const [ordenMayor, setOrdenMayor] = useState(false);
    const [ordenMenor, setOrdenMenor] = useState(false);

    const resetValues = () => {
      setSearchValue("")
      setClave(false)
      setOrdenMayor(false);
      setOrdenMenor(false);
    }

    const getAllService = async () => {
      resetValues()
      const value = await serviciosRecomendados()
      setServicios(value.data)
    }

    const getAllServiceCat = async () => {
      resetValues()
      const value = await serviciosRecomendados()
      setServicios(value.data)
      setEstado("todos")
      setTodos(true)
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setOrdenMayor(false);
      setOrdenMenor(false);
      if(searchValue.length != 0){
        const palabraClave = servicios.filter((el: ServicioProfesional) => {
          return el.title.toLocaleLowerCase().includes(`${searchValue.toLocaleLowerCase()}`) || el.description.toLocaleLowerCase().includes(`${searchValue.toLocaleLowerCase()}`) || el.services[0].name.toLocaleLowerCase().includes(`${searchValue.toLocaleLowerCase()}`)
        })
        console.log(palabraClave);
        
        if(palabraClave.length > 0){
          setServiciosPrev(palabraClave)
          setClave(true)
        }else{
          setClave(false)
          dispatch(
            notificacionesActions.NORMAL({
              message: "No encontramos esa palabra clave",
            })
          );
        }
      }else{
        setClave(false)
      }
      
    };

    const handleClickMayor = () => {
      if(!ordenMayor){
        if(searchValue.length > 0){
          const mayorPrev = serviciosPrev.sort((a, b) => b.services[0].price - a.services[0].price)
          setServiciosPrev(mayorPrev)
        }else{
          const mayor = servicios.sort((a, b) => b.services[0].price - a.services[0].price)
          setServiciosPrev(mayor)
        }
        setClave(true)
      }else{
        setClave(false)
      }
      setOrdenMayor(!ordenMayor);
      setOrdenMenor(false);
    };
  
    const handleClickMenor = () => {
      if(!ordenMenor){
        if(searchValue.length > 0){
          const menorPrev = serviciosPrev.sort((a, b) => a.services[0].price - b.services[0].price)
          setServiciosPrev(menorPrev)
        }else{
          const menor = servicios.sort((a, b) => a.services[0].price - b.services[0].price)
          setServiciosPrev(menor)
        }
        setClave(true)
      }else{
        setClave(false)
      }
      setOrdenMayor(false);
      setOrdenMenor(!ordenMenor);
    };
    
   useEffect(() => {
    setServicios([])
    const getServicios = async () => {
        if(service){
            setEstado(service)
            const value = await serviciosCategory(service)
            if(value){
              const data = value.data
              setServiciosPrev(data)
              setServicios(data)
            }
        }else{
          await getAllService()
          setEstado("todos")
          setTodos(true)
          if(buscarServicio){
            setSearchValue(buscarServicio)
          }
        }
     }
     getServicios()
   }, [service])

   const handleSetServicio = (value: Array<ServicioProfesional>) => {
    resetValues()
    if(todos){
      setServicios(value)
      setEstado(value[0].category)
      setTodos(false)
    }else{
      setServicios([...servicios, ...value])
    }
   }

   const handleDeleteServicio = (value: string) => {
    resetValues()
    const filterServicio = servicios.filter(el => el.category !== value)
    if(filterServicio.length > 0){
      setServicios(filterServicio)
    }else{
      getAllService()
      setEstado("todos")
      setTodos(true)
    }
    
   }
   
    const OPCIONES = [
        {
            name: "todos",
            nick: "Todos los servicios",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
          name: "carpintero",
          nick: "Carpintería",
          svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
              <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
            </svg>
          ),
        },
        {
            name: "electricista",
            nick: "Electricista",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "lavadero",
            nick: "Lavado de vehículos",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "mecanico",
            nick: "Mecánico",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "reparaciones",
            nick: "Mantenimiento / Reparación",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "plomeria",
            nick: "Plomería",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "peluqueria",
            nick: "Peluquería",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "personal trainer",
            nick: "Personal trainer",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "jardinero",
            nick: "Jardinería / Paisajismo",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "gasista",
            nick: "Gasista",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "DJ",
            nick: "DJ",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "programador",
            nick: "Programación",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "salud",
            nick: "Asistente de cuidado",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "chofer",
            nick: "Chofer personal",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "paseador mascotas",
            nick: "Cuidado de mascotas",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "profesor particular",
            nick: "Profesor particular",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "limpieza",
            nick: "Limpieza | Organización",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
        {
            name: "otros",
            nick: "Otros servicios",
            svg: (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                <path d="M14.68 1.275a.646.646 0 0 0-.46-.46c-.464-.128-1.177.191-1.58.595-.402.402-.723 1.116-.595 1.58a.646.646 0 0 0 .46.46c.464.128 1.177-.191 1.58-.595.402-.402.723-1.116.595-1.58zM3.207 13.208l6-6a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707zM1.5 13.5V15a.5.5 0 0 1-.5.5H0a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm13 0V15a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM9 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5H9V4z"/>
              </svg>
            ),
        },
    ]

  return (
    <main className="flex flex-col items-center mb-20 min-h-[100vh] font-libre-franklin">
        <section className="flex flex-col justify-center items-center bg-[#E7EDFC] mb-12 w-full h-[350px]">
            <h1 className="font-bold text-[#0E7490] text-4xl">Busca tus servicios</h1>
            <div className="flex flex-wrap gap-4">
                <Carousel className="mt-5 w-[1250px]">
                    <CarouselContent>
                        {OPCIONES?.map((el) => (
                            <CarouselItem key={el.name} className="basis-1/6" >
                                <CatServiceCard el={el} estado={estado} getTodos={getAllServiceCat} todos={todos} setServicios={handleSetServicio} eliminar={handleDeleteServicio} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-ml-12 w-16 h-16 focus-visible:ring-0 focus-visible:ring-offset-0 border-2 border-main-red" />
                    <CarouselNext className="-mr-12 w-16 h-16 focus-visible:ring-0 focus-visible:ring-offset-0 border-2 border-main-red" />
                </Carousel>        
            </div>
        </section>

            <div className="flex w-[90%]">
              <div className="flex flex-col gap-3 border-main-red border rounded-3xl w-[400px] h-[500px]">
                <h3 className="mt-8 ml-7 font-bold text-[#083643] text-lg">Filtra tus servicios</h3>
                <form onSubmit={(e) => handleSearch(e)}>
                  <search className="flex items-center ml-7">
                    <input
                      className="border-[#7C7C7C] border-2 py-2 pr-4 pl-2 border-r-0 rounded-xl rounded-tr-none rounded-br-none outline-none"
                      type="text"
                      placeholder="Busca una palabra clave"
                      value={searchValue}
                      onChange={(e) => {
                        setSearchValue(e.target.value)
                        if(e.target.value.length === 0){
                          setClave(false)
                        }
                      }}
                    />
                    <button
                      className="border-[#7C7C7C] border-2 py-2 pr-2 border-l-0 rounded-xl rounded-tl-none rounded-bl-none text-[#7C7C7C]"
                      type="submit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </button>
                  </search>
                </form>
                <div className="flex flex-col justify-center gap-1 ml-7">
                  <div className="flex items-center gap-2">
                    <input
                      className="w-4 h-4"
                      type="checkbox"
                      id="ordenMayor"
                      checked={ordenMayor}
                      onChange={handleClickMayor}
                    />
                    <label className="font-semibold text-[#0E7490]" htmlFor="ordenMayor">Ordenar por mayor</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      className="w-4 h-4"
                      type="checkbox"
                      id="ordenMenor"
                      checked={ordenMenor}
                      onChange={handleClickMenor}
                    />
                    <label className="font-semibold text-[#0E7490]" htmlFor="ordenMenor">Ordenar por menor</label>
                  </div>
                </div>
              </div>
              {clave ? (<>
                {serviciosPrev && (
                  <div className="flex flex-wrap justify-start gap-9 px-9 max-w-[1200px]">
                    {serviciosPrev.map(el => (
                        <RecomendacionesCard key={el._id} servicioProfesional={el}/>
                    ))}
                  </div>
                )}
                </>
              ) : (<>
                {servicios && (
                  <div className="flex flex-wrap justify-start gap-9 px-9 max-w-[1200px]">
                    {servicios.map(el => (
                        <RecomendacionesCard key={el._id} servicioProfesional={el}/>
                    ))}
                  </div>
                )}
                </>
              )}
            </div>
    </main>
  )
}
