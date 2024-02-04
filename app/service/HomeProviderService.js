// HomeProviderService.js

import { httpAxios } from "../httpAxios";

export async function HomeProviderService({ id }) {
  try {
    const result = await httpAxios.get(`api/services`, { id: id });
    return result.data;
  } catch (error) {
    throw error;
  }
}

export async function HomeProviderServiceFirst({ id }) {
  try {
    const result = await httpAxios.get(`api/services`, { id: id });
    return result.data;
  } catch (error) {
    throw error;
  }
}
