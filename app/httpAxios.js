import axios from "axios";

export const httpAxios = axios.create({ baseURL : "https://eshop.ecommerce/"  || "http://localhost:3000" || "https://erequirements.vercel.app"});
