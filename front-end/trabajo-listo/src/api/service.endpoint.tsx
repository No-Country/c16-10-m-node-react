import { MisServiciosLista } from "@/components/component";
import apiClient from "@/server";

export const getProfesionalService = async (id: string): Promise<Array<MisServiciosLista>> => {
    
    try {
      
      const res = await apiClient.get(`post/professional/${id}`);
      
      console.log(res.data);
      if (!res) throw new Error("Fallo al cargar la imagen")
      
  
      return res.data;
    } catch (error) {
      console.error("Error al obtener los datos: ", error)
      throw error
    }
  };