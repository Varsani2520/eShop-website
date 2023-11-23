import { httpAxios } from "../httpAxios";

export async function getFavioriteService({token}) {
  const result = await httpAxios
    .post("api/get-faviorite",{token:token})
    .then((response) => response.data);
  return result;
}
