import { httpAxios } from "../httpAxios";

export async function getBookmark(token) {
  const result = await httpAxios
    .post("api/get-bookmark",{token})
    .then((response) => response.data);
  return result;
}
