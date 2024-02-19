import axios from "axios"


export const registerUser = async (user: object) => {
  try {
    const res = await axios.post("https://trabajo-listo.vercel.app/api/user", user)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

export const authUser = async (user: object) => {
  try {
    const res = await axios.post("https://trabajo-listo.vercel.app/api/auth/login", user)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}