import { useState } from "react";

export const NuevoServicio = () => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [subcategoria, setSubcategoria] = useState('');
    const [foto, setFoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a través de una función de envío
        // Puedes utilizar fetch, axios u otra librería para hacer la solicitud
        // Por ejemplo:
        const data = {
            titulo,
            descripcion,
            precio,
            subcategoria,
            foto,
        };
        console.log(data);
    };

    const handleFotoChange = (e) => {
        const file = e.target.files[0];
        setFoto(file);
    };

    return (
        <main className="flex justify-center h-[100vh]">
            <form onSubmit={handleSubmit} className="relative flex flex-col bg-white mt-[70px] p-5 border border-slate-300 rounded-sm w-[500px] h-[500px]">
                <label className="font-semibold text-zinc-500" htmlFor="titulo">Título:</label>
                <input className="mt-2 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md" id="titulo" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                
                <label className="font-semibold text-zinc-500" htmlFor="descripcion">Descripción:</label>
                <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                
                <label className="font-semibold text-zinc-500" htmlFor="precio">Precio:</label>
                <input className="mt-2 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md" id="precio" type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                
                <label className="font-semibold text-zinc-500" htmlFor="subcategoria">Subcategoría:</label>
                <input className="mt-2 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md" id="subcategoria" type="text" value={subcategoria} onChange={(e) => setSubcategoria(e.target.value)} />
                
                <label className="font-semibold text-zinc-500" htmlFor="foto">Foto:</label>
                <input className="mt-2 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md" id="foto" type="file" accept="image/*" onChange={handleFotoChange} />
                
                <button type="submit">Guardar</button>
            </form>
        </main>
        
    );
}
