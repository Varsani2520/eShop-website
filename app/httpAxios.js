import axios from "axios";

export const httpAxios = axios.create({ baseURL : "http://localhost:3000 || https://erequirements.vercel.app" });
