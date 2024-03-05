import {
  editarServicio,
  getUnServicio,
  imageServicio,
} from "@/api/service.endpoint";
import { ServicioEditar, UserState } from "@/components/component";
import { notificacionesActions } from "@/store/notificacionesSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const EditarServicio = () => {
  const user = useSelector((state: { user: UserState }) => state.user);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [foto, setFoto] = useState<null | File>(null);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("carpintero");
  const { id } = useParams();

  //Obtiene un servicio por id, si logra traerlo actualiza las inputs del formulario
  useEffect(() => {
    const obtenerServicio = async () => {
      if (id) {
        const value = await getUnServicio(id);
        if (value) {
          setTitulo(value.data.title);
          setDescripcion(value.data.description);
          setSubcategoria(value.data.services[0].name);
          setPrecio(value.data.services[0].price);
          setOpcionSeleccionada(value.data.category);
        }
      }
    };
    obtenerServicio();
  }, [id]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Enum de categorias
  const opciones = [
    "carpintero",
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
    "otros",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      titulo.length > 5 &&
      descripcion.length > 5 &&
      subcategoria.length > 5 &&
      parseInt(precio) > 0
    ) {
      const data: ServicioEditar = {
        title: titulo,
        description: descripcion,
        category: opcionSeleccionada,
        services: [
          {
            name: subcategoria,
            price: parseFloat(precio),
          },
        ],
      };

      if (id) {
        const res = await editarServicio(id, data);
        if (res) {
          await imageServicio(id, user.token, foto);

          setTitulo("");
          setDescripcion("");
          setPrecio("");
          setSubcategoria("");
          setOpcionSeleccionada("carpintero");
          setFoto(null);
          dispatch(
            notificacionesActions.SUCCES({
              message: "Su servicio se editó correctamente",
            })
          );
          navigate(`/perfil/${user.id}`);
        }
      }
    } else {
      dispatch(
        notificacionesActions.ADVERTENCIA({
          message: "Los campos deben tener mas de 5 caracteres",
        })
      );
    }
  };

  //Actualiza los datos de la input file
  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFoto(file);
    }
  };

  //Actualiza los datos del selector de categorias
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <main className="flex flex-col items-center min-h-[100vh]">
      <h1 className="mt-[70px] mb-4 font-bold text-2xl text-red-500 italic">
        AGREGA UN NUEVO SERVICIO
      </h1>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col bg-white mb-[70px] p-5 border border-slate-300 rounded-sm w-[500px] h-[700px]"
      >
        <label className="font-semibold text-zinc-500" htmlFor="titulo">
          Título:
        </label>
        <input
          className="mt-2 mb-4 py-2 pl-2 focus:border-2 focus:outline-0 pr-4 border rounded-md"
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label className="font-semibold text-zinc-500" htmlFor="descripcion">
          Descripción:
        </label>
        <textarea
          className="mt-2 mb-4 py-2 pl-2 focus:border-2 focus:outline-0 pr-4 border rounded-md"
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <label className="font-semibold text-zinc-500" htmlFor="precio">
          Precio: (US$)
        </label>
        <input
          className="mt-2 mb-4 py-2 pl-2 focus:border-2 focus:outline-0 pr-4 border rounded-md"
          id="precio"
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />

        <label className="font-semibold text-zinc-500" htmlFor="miSelect">
          Selecciona una categoría:
        </label>
        <select
          id="miSelect"
          className="mt-2 mb-4 py-2 pl-2 focus:border-2 focus:outline-0 pr-4 border rounded-md"
          value={opcionSeleccionada}
          onChange={handleChange}
        >
          {opciones.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>

        <label className="font-semibold text-zinc-500" htmlFor="subcategoria">
          Subcategoría:
        </label>
        <input
          className="mt-2 mb-4 py-2 pl-2 focus:border-2 focus:outline-0 pr-4 border rounded-md"
          id="subcategoria"
          type="text"
          value={subcategoria}
          onChange={(e) => setSubcategoria(e.target.value)}
        />

        <label className="font-semibold text-zinc-500" htmlFor="foto">
          Foto:
        </label>
        <input
          className="mt-2 mb-4 py-2 pl-2 focus:border-2 focus:outline-0 pr-4 border rounded-md"
          id="foto"
          type="file"
          accept="image/*"
          onChange={handleFotoChange}
        />

        <button
          type="submit"
          className="right-3 bottom-2 bg-red-500 px-5 py-3 rounded-sm font-semibold text-white"
        >
          Subir servicio
        </button>
      </form>
    </main>
  );
};
