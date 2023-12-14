import { httpAxios } from "../httpAxios";

export async function signupservice(username, password,name,address) {
  const result = await httpAxios
    .post("api/signup", { username: username, password: password ,name:name,address:address})
    .then((response) => response.data);
  return result;
}

export async function deleteAccountService(token) {
  const result = await httpAxios
    .post("api/delete-account", { token:token})
    .then((response) => response.data);
  return result;
}