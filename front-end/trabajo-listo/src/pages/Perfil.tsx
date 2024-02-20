import { getUser } from "@/api/user.endpoint";
import { UserState } from "@/components/component";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Perfil = () => {

    const { id } = useParams<{ id: string }>();
    const user = useSelector((state: { user: UserState }) => state.user);
    const [usuario, setUsuario] = useState<UserState>({name: "",email: "",imageProfile: "",id: "",token: "",isPro: false,})

    useEffect(() => {
        const llamada = async () => {
         const value: UserState = id ? await getUser(id, user.token) : {name: "",email: "",imageProfile: "",id: "", token: "",isPro: false,}

         if (value) setUsuario(value)
        };

        llamada() 
    }, [id, user.token])
    
  return (
    <div className="flex items-center justify-center h-15">
        {usuario && usuario.name}
    </div>
  )
}
