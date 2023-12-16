import { httpAxios } from "../httpAxios";

export async function cartService(token, data) {
  const result = await httpAxios
    .post("api/cart", { token: token, data: data })
    .then((response) => response);
  return result;
}
