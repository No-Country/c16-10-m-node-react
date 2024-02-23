import { useState } from "react";

export const NuevoServicio = () => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [subcategoria, setSubcategoria] = useState('');
    const [foto, setFoto] = useState<null | File>(null);    
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const opciones = [
        'carpintero',
        'electricista',
        'lavadero',
        'mecanico',
        'reparaciones',
        'plomeria',
        'peluqueria',
        'personal trainer',
        'jardinero',
        'gasista',
        'DJ',
        'programador',
        'salud',
        'chofer',
        'paseador mascotas',
        'profesor particular',
        'limpieza',
        'otros'
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

    const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file){
            setFoto(file);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOpcionSeleccionada(event.target.value);
    };

    return (
        <main className="flex flex-col items-center h-[100vh] ">
            <h1 className="mt-[70px] mb-4 font-bold text-2xl text-red-500 italic">AGREGA UN NUEVO SERVICIO</h1>
            <form onSubmit={handleSubmit} className="relative flex flex-col bg-white mb-[70px] p-5 border border-slate-300 rounded-sm w-[500px] h-[700px]">
                <label className="font-semibold text-zinc-500" htmlFor="titulo">Título:</label>
                <input className="mt-2 mb-4 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md" id="titulo" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                
                <label className="font-semibold text-zinc-500" htmlFor="descripcion">Descripción:</label>
                <textarea className="mt-2 mb-4 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                
                <label className="font-semibold text-zinc-500" htmlFor="precio">Precio: (US$)</label>
                <input className="mt-2 mb-4 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md" id="precio" type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />

                <label className="font-semibold text-zinc-500" htmlFor="miSelect">Selecciona una categoría:</label>
                <select id="miSelect" className="mt-2 mb-4 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md" value={opcionSeleccionada} onChange={handleChange}>
                    {opciones.map((el) => (
                        <option key={el} value={el}>{el}</option>
                    ))}
                </select>
                
                <label className="font-semibold text-zinc-500" htmlFor="subcategoria">Subcategoría:</label>
                <input className="mt-2 mb-4 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md" id="subcategoria" type="text" value={subcategoria} onChange={(e) => setSubcategoria(e.target.value)} />
                
                <label className="font-semibold text-zinc-500" htmlFor="foto">Foto:</label>
                <input className="mt-2 mb-4 focus:outline-0 py-2 pr-4 pl-2 border focus:border-2 rounded-md" id="foto" type="file" accept="image/*" onChange={handleFotoChange} />
                
                <button type="submit" className="right-3 bottom-2 absolute bg-red-500 px-5 py-3 rounded-sm font-semibold text-white">Subir servicio</button>
            </form>
        </main>
        
    );
}
