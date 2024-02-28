import apiClient from "@/server";

export const postConsulta = async (idPost: string, consulta: object) => {
  try {
    const res = await apiClient.post(`post/comment/${idPost}`, consulta);
    console.log(res);
    if (!res) throw new Error("Bad request");
    return res;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};
