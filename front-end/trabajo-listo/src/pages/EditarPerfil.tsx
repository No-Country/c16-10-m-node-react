import { updateImage, updateProfile } from '@/api/user.endpoint';
import { UserState } from '@/components/component';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export const EditarPerfil = () => {
    const user = useSelector((state: { user: UserState }) => state.user);
    const [nombre, setNombre] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [imagen, setImagen] = useState<null | object>(null)
        
    
    const handleImagenChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const image = event.target.files?.[0];

        if (image) {
          setImagen(image)      
        }else{
          setImagen(null)
        }
    };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = {name: nombre, email: email}
        if(data.name.length > 2 && data.email.length > 2) {
            const newValues = await updateProfile(user.id, user.token, data)
            console.log(newValues);
            
            
        }
        if (imagen != null && data.name.length > 3 && data.email.length > 3) {
          
          const urlImage = await updateImage(user.id, user.token, imagen) 
          console.log(urlImage);
       }
      };

    return (
        <main className='flex flex-col items-center bg-[#f7f7f7] min-h-[100vh]'>
          <h1 className='mt-[70px] font-bold text-3xl text-red-500 italic'>EDITAR PERFIL</h1>
          <form className='relative flex flex-col bg-white mt-5 p-5 border border-slate-300 rounded-sm' onSubmit={handleSubmit}>
            <label className='font-semibold text-zinc-500'>Nombre Completo:</label>
            <input className='mt-2 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md' placeholder={user.name} type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

            <label className='mt-4 font-semibold text-zinc-500'>Email:</label>
            <input className='mt-2 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md' type="email" placeholder={user.email} value={email} onChange={(e) => setEmail(e.target.value)} />

            <div className='flex flex-col mt-4'>
                <div >
                    <label className='mr-5 font-semibold text-zinc-500 '>Imagen de perfil:</label>
                    <input type="file" accept="image/*" name='image' onChange={handleImagenChange} />
                </div>
                <img className='mt-3 rounded-full w-[85px] h-[85px]' src={user.imageProfile} alt={`Foto de perfil del usuario ${user.name}`} />
            </div>

            <button className='right-3 bottom-2 absolute bg-red-500 px-3 py-2 rounded-sm font-semibold text-white' type="submit">Guardar cambios</button>
          </form>
        </main>
      );
}