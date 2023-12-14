import { httpAxios } from "../httpAxios";

export async function getFaviorites(token,data) {
  const result = await httpAxios
    .post("api/get-faviorite",{token:token,data:data})
    .then((response) => response.data);
  return result;
}
