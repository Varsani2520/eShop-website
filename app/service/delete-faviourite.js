import { httpAxios } from "../httpAxios";

export async function deleteFaviouriteService(token) {
  const result = await httpAxios
    .post("api/delete-faviourite", { token})
    .then((response) => response.data);
  return result;
}
