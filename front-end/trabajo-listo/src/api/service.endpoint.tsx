import { ServicioEditar, ServicioProfesional } from "@/components/component";
import apiClient from "@/server";

export const serviciosRecomendados = async () => {
  try {
    const res = await apiClient.get("post");
    if (!res) throw new Error("Bad request");
    return res;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const getProfesionalService = async (id: string) => {
  try {
    const res = await apiClient.get(`post/professional/${id}`);

    if (!res) throw new Error("Bad request");

    return res;
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      return null;
    }
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const subirServicio = async (data: ServicioProfesional) => {
  try {
    const res = await apiClient.post(`post`, data);
    if (!res) throw new Error("Bad request");

    return res;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const deleteServicio = async (id: string) => {
  try {
    const res = await apiClient.delete(`post/${id}`);
    if (!res) throw new Error("Bad request");

    return res;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const editarServicio = async (id: string, data: ServicioEditar) => {
  try {
    const res = await apiClient.put(`post/${id}`, data);
    if (!res) throw new Error("Bad request");

    return res;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const getUnServicio = async (id: string) => {
  try {
    const res = await apiClient.get(`post/${id}`);
    if (!res) throw new Error("Bad request");

    return res;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const imageServicio = async (
  id: string,
  token: string,
  image: File | null
): Promise<object> => {
  try {
    const res = await apiClient.post(
      `post/image/${id}`,
      { image: image },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (!res) throw new Error("Fallo al cargar la imagen");

    return res.data;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    return { error: "error" };
  }
};

function convertirTexto(texto: string) {
  return texto.toUpperCase().replace(/ /g, "_");
}

export const serviciosCategory = async (categoria: string) => {
  try {
    const textoConvertido = convertirTexto(categoria);

<<<<<<< HEAD
    const res = await apiClient.get(
      `post/category/${textoConvertido}?page=1&limit2`
    );
=======
    const res = await apiClient.get(`post/category/${textoConvertido}?page=1&limit2`);
>>>>>>> dd83b7f66554a2b3d0f6846d11a81e0b5a23a1a2
    if (!res) throw new Error("Bad request");
    return res;
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      return null;
    }
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};
