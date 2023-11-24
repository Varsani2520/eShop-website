import { httpAxios } from "../httpAxios";

export async function getFaviorites(token) {
  const result = await httpAxios
    .post("api/get-faviorite",{token})
    .then((response) => response.data);
  return result;
}
