import { v2 } from "cloudinary";
import { CLOUDINARY_SECRET } from "../env";

type Params = {
  version: string;
  publicId: string;
  signature: string;
};

export function validateUpload({ signature, publicId, version }: Params) {
  const expectedSignature = v2.utils.api_sign_request(
    { public_id: publicId, version },
    CLOUDINARY_SECRET
  );

  return expectedSignature !== signature;
}
