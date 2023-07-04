import { API_BASE } from "@env";
import axios from "axios";

export const api = axios.create({
  baseURL: API_BASE,
});
