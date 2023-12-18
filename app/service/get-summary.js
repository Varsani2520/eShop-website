import { httpAxios } from "../httpAxios";

export async function getSummaries(token) {
  const result = await httpAxios
    .post("api/get-summary", { token: token})
    .then((response) => response.data);
  return result;
}
