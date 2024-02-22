import apiClient from "@/server";

export const serviciosRecomendados = async () => {
  try {
    const res = await apiClient.get("post");
    if (!res) throw new Error("Bad request");
    console.log(res);
    return res;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};
