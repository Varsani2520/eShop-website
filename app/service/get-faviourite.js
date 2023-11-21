import { httpAxios } from "../httpAxios";

export async function getFavioriteService(id) {
  const result = await httpAxios
    .post("api/get-faviorite",{id})
    .then((response) => response.data);
  return result;
}
