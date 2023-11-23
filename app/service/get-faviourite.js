import { httpAxios } from "../httpAxios";

export async function FavioriteService(token, data) {
  const result = await httpAxios
    .post("api/faviorite", { token: token, data: data })
    .then((response) => response);
  return result;
}
