import { ServicioProfesional } from "@/components/component";
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
