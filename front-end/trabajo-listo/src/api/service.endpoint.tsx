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
    const res = await apiClient.delete(`post/${id}`,);
    if (!res) throw new Error("Bad request");

    return res;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const editarServicio = async (id: string, data: ServicioProfesional) => {
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



