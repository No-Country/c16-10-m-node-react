import { getUser } from "@/api/user.endpoint";
import { UserState } from "@/components/component";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const Perfil = () => {

    const { id } = useParams<{ id: string }>();
    const user = useSelector((state: { user: UserState }) => state.user);
    const [usuario, setUsuario] = useState<UserState>({name: "",email: "",imageProfile: "",id: "",token: "",isPro: false,})
    console.log(usuario);
    

    useEffect(() => {
        const llamada = async () => {
         const value: UserState = id ? await getUser(id, user.token) : {name: "",email: "",imageProfile: "",id: "", token: "",isPro: false,}

         if (value) setUsuario(value)
        };

        llamada() 
    }, [id, user.token])
    
  return (
    <main className="flex justify-center gap-[70px] bg-[#f7f7f7] min-h-[100vh]">
        <section className="relative flex flex-col items-center bg-white mt-[70px] border border-slate-300 rounded-sm w-[400px] h-[270px]">
            <img className="mt-6 rounded-full w-[150px] h-[150px]" src={usuario.imageProfile} alt={`Imagen del usuario ${usuario.name}`} />
            <h1 className="mt-3 font-bold text-2xl text-zinc-800">{usuario.name}</h1>
            <span className="italic">{usuario.email}</span>
            <p className="top-2 left-3 absolute font-semibold text-zinc-500">{usuario.isPro ? "Profesional" : "Cliente"}</p>
            {user.id == usuario.id && (
            <div className="top-2 right-3 absolute text-zinc-500 cursor-pointer">
                <Link to="/editar-perfil">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </Link>
            </div>
            )}
        </section>
        {!usuario.isPro && (
            <div className="flex flex-col items-center justify-center gap-5 bg-white mt-[70px] border border-slate-300 rounded-sm w-[700px] h-[270px]">
                <h2 className="font-semibold text-xl text-zinc-600">¿Quieres publicar tus propios servicios?</h2>
                <button className="bg-red-500 px-5 py-3 rounded-sm font-semibold text-white" typeof="button">Conviertete en vendedor</button>
            </div>
        )}
    </main>
  )
}