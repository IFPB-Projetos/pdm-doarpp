import axios, { AxiosProgressEvent } from "axios";
import { Upload } from "../types/upload";
import { getSignature } from "./getSignature";

const cloudName = "dlwoimstk";
const apiKey = "378278351497316";
const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

export async function uploadImage(
  base64: string,
  onProgress: (e: AxiosProgressEvent) => void
) {
  const { signature, timestamp } = await getSignature();

  const form = new FormData();
  form.append("api_key", apiKey);
  form.append("signature", signature);
  form.append("timestamp", "" + timestamp);
  form.append("file", `data:;base64,${base64}`);

  try {
    const res = await axios.post(endpoint, form, {
      onUploadProgress: onProgress,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const { version, public_id: publicId, signature } = res.data;
    const upload: Upload = { publicId, signature, version };

    return upload;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
