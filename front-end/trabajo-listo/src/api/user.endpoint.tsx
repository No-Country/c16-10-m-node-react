import { UserState, tokenUser } from "@/components/component";
import apiClient, { setClientToken } from "../server";
import { jwtDecode } from "jwt-decode";

export const registerUser = async (user: object) => {
  try {
    const res = await apiClient.post("user", user);
    if (!res) throw new Error("Bad Request");
    return true;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const authUser = async (user: object) => {
  try {
    const res = await apiClient.post("auth/login", user);

    if (!res) throw new Error("Bad Request");
    setClientToken(res.data);
    return res.data;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const getUser = async (
  id: string,
  token: string
): Promise<UserState> => {
  try {
    const res = await apiClient.get(`user/${id}`);

    if (!res) throw new Error("Bad Request");

    const newObject: UserState = {
      name: res.data.name,
      token: token,
      id: res.data._id,
      imageProfile: res.data.imageProfile,
      isPro: false,
      email: res.data.email,
    };
    return newObject;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const getProfile = async (value: string): Promise<object> => {
  try {
    const decodedToken: tokenUser = jwtDecode(value);
    const res = await apiClient.get(`user/${decodedToken.id}`);

    if (!res) throw new Error("Bad Request");

    return res.data;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const updateProfile = async (
  id: string,
  data: object
): Promise<object> => {
  try {
    console.log(data);
    console.log(id);

    const res = await apiClient.put(`user/${id}`, data);

    if (!res) throw new Error("Fallo al actualizar");

    return res.data;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};

export const updateImage = async (
  id: string,
  token: string,
  image: object
): Promise<object> => {
  try {
    console.log(image);
    const res = await apiClient.post(
      `user/image/${id}`,
      { image: image },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res.data);
    if (!res) throw new Error("Fallo al cargar la imagen");

    return res.data;
  } catch (error) {
    console.error("Error al obtener los datos: ", error);
    throw error;
  }
};


export const getAll = async (token: string): Promise<object> => {
  try {
    
    const res = await apiClient.get(`user/`,{
      headers: { 
        Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data'
      },
    });
    
    console.log(res.data);
    if (!res) throw new Error("Fallo al cargar la imagen")
    

    return res.data;
  } catch (error) {
    console.error("Error al obtener los datos: ", error)
    throw error
  }
};
