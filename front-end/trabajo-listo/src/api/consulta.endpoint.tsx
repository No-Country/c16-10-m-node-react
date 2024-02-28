import apiClient from "@/server";

export const getConsultas = async (idPost: string) => {
  try {
    const res = await apiClient.get(`post/comment/${idPost}`);
    console.log(res);
    if (!res) throw new Error("Bad request");
    return res;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};
