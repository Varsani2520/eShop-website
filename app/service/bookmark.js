import { httpAxios } from "../httpAxios";

export async function bookmarkServices(token, data) {
  const result = await httpAxios
    .post("api/bookmark", { token: token, data: data })
    .then((response) => response.data);
  return result;
}
