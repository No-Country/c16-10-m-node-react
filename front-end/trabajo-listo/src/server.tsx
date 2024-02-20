import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://trabajo-listo.vercel.app/api/",
});

/*export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};*/

export default apiClient;
