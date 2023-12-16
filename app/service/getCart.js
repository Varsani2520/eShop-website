import { httpAxios } from "../httpAxios";

export async function getCart(token, data) {
  const result = await httpAxios
    .post("api/get-cart", { token: token, data: data })
    .then((response) => response.data);
  return result;
}
