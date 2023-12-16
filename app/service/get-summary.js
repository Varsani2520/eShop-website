import { httpAxios } from "../httpAxios";

export async function summaryService(token, data,date,status) {
  const result = await httpAxios
    .post("api/get-summary", { token: token, data: data ,date:date,status:status})
    .then((response) => response);
  return result;
}
