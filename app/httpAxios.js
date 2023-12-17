import axios from "axios";

export const httpAxios = axios.create({
  baseURL: "https://erequirements.vercel.app",
});
