import { UserState, tokenUser } from "@/components/component";
import apiClient from "../server";
import { jwtDecode } from "jwt-decode";

export const registerUser = async (user: object) => {
  try {
    const res = await apiClient.post("user", user);
    if (!res) throw new Error("Bad Request")
  } catch (error) {
    console.error("Error al obtener los datos: ", error)
    throw error
  }
};

export const authUser = async (user: object) => {
  try {
    const res = await apiClient.post("auth/login", user);

    if (!res) throw new Error("Bad Request")

    return res.data;
  } catch (error) {
    console.error("Error al obtener los datos: ", error)
    throw error
  }
};

export const getUser = async (id: string, token: string): Promise<UserState> => {
  try {
    
    const res = await apiClient.get(`user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res) throw new Error("Bad Request")

    const newObject: UserState = {name: res.data.name, token: token, id: res.data._id, imageProfile: res.data.imageProfile, isPro: false, email: res.data.email}
    return newObject;
  } catch (error) {
    console.error("Error al obtener los datos: ", error)
    throw error
  }
};

export const getProfile = async (value: string): Promise<object> => {
  try {
    const decodedToken: tokenUser = jwtDecode(value);
    const res = await apiClient.get(`user/${decodedToken.id}`, {
      headers: { Authorization: `Bearer ${value}` },
    });

    if (!res) throw new Error("Bad Request")

    return res.data;
  } catch (error) {
    console.error("Error al obtener los datos: ", error)
    throw error
  }
};
