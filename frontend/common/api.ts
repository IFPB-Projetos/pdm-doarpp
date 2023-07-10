import { API_BASE } from "@env";
import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: API_BASE,
});

function doNothing<T>(res: T) {
  return res;
}
api.interceptors.response.use(doNothing, (error: AxiosError) => {
  const req: Request = error.request;
  console.error(req);
});
