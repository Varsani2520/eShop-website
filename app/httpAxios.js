import axios from "axios";

export const httpAxios = axios.create({ baseURL : "https://eshop.ecommerce.vercel.app"  || "http://localhost:3000" || "https://erequirements.vercel.app"});
