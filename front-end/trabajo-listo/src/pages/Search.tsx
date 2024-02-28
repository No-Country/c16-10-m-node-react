import { serviciosCategory } from "@/api/service.endpoint"
import { CatServiceCard } from "@/components/CatServiceCard"
import RecomendacionesCard from "@/components/RecomendacionesCard"
import { ServicioProfesional } from "@/components/component"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const Search = () => {
    const [servicios, setServicios] = useState<Array<ServicioProfesional>>([])
    const location = useLocation();
    const service = location.state?.id;
    console.log(service);
    
   useEffect(() => {
    setServicios([])
    const getServicios = async () => {
        if(service){
            const value = await serviciosCategory(service)
            if(value){
              const data = value.data
              setServicios(data)
            }
        }
     }
     getServicios()
   }, [service])

   const handleSetServicio = (value: Array<ServicioProfesional>) => {
    setServicios([...servicios, ...value])
   }

   const handleDeleteServicio = (value: string) => {
    const filterServicio = servicios.filter(el => el.category !== value)
    setServicios(filterServicio)
   }
   

   /* "carpintero",
    "electricista",
    "lavadero",
    "mecanico",
    "reparaciones",
    "plomeria",
    "peluqueria",
    "personal trainer",
    "jardinero",
    "gasista",
    "DJ",
    "programador",
    "salud",
    "chofer",
    "paseador mascotas",
    "profesor particular",
    "limpieza",
    "otros",*/

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
    <main className="mb-20 min-h-[100vh]">
        <section className="flex flex-col justify-center items-center bg-[#E7EDFC] h-[350px]">
            <h1 className="font-bold text-[#0E7490] text-4xl">Busca tus servicios</h1>
            <div className="flex flex-wrap gap-4">
                <Carousel className="mt-5 w-[1250px]">
                    <CarouselContent>
                        {OPCIONES?.map((el) => (
                            <CarouselItem key={el.name} className="basis-1/6" >
                                <CatServiceCard el={el} estado={service} setServicios={handleSetServicio} eliminar={handleDeleteServicio} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="-ml-12 w-16 h-16 focus-visible:ring-0 focus-visible:ring-offset-0 border-2 border-main-red" />
                    <CarouselNext className="-mr-12 w-16 h-16 focus-visible:ring-0 focus-visible:ring-offset-0 border-2 border-main-red" />
                </Carousel>        
            </div>
        </section>
        {servicios && (
            <div className="flex flex-wrap justify-center gap-9 mt-12 px-9 w-full">
                {servicios.map(el => (
                    <RecomendacionesCard key={el._id} servicioProfesional={el}/>
                ))}
            </div>
        )}
    </main>
  )
}
