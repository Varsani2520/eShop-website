import { httpAxios } from "../httpAxios";

export async function summaryServices(token, data, status, date) {
  const result = await httpAxios
    .post("api/summaries", {
      token: token,
      data: data,
      status: status,
      date: date,
    })
    .then((response) => response.data);
  return result;
}
