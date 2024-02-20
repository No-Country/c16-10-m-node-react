import { tokenUser } from "@/components/component";
import apiClient from "../server";
import { jwtDecode } from "jwt-decode";

export const registerUser = async (user: object) => {
  try {
    const res = await apiClient.post("user", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const authUser = async (user: object) => {
  try {
    const res = await apiClient.post("auth/login", user);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (value: string): Promise<object | undefined> => {
  try {
    const decodedToken: tokenUser = jwtDecode(value);
    const res = await apiClient.get(`user/${decodedToken.id}`, {
      headers: { Authorization: `Bearer ${value}` },
    });

    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
