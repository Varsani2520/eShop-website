import { httpAxios } from "../httpAxios";

export async function contactAddress(
  name,
  contactNo,
  city,
  state,
  pin,
  house,
  area
) {
  const result = await httpAxios
    .post("api/contactAddress", {
      name: name,
      city: city,
      house: house,
      state: state,
      pin: pin,
      area: area,
      contactNo: contactNo,
    })
    .then((response) => response.data);
  return result;
}
