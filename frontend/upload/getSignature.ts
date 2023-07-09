import { api } from "../common/api";

export async function getSignature() {
  const res = await api.get<{
    signature: string;
    timestamp: number;
  }>("/upload/signature");
  return res.data;
}
