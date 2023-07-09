import { config } from "dotenv";
config();

import { v2 } from "cloudinary";
v2.config({
  secure: true,
  cloud_name: "dlwoimstk",
  api_key: "378278351497316",
  api_secret: process.env.CLOUDINARY_SECRET,
});

export function createSignature() {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = v2.utils.api_sign_request(
    { timestamp },
    process.env.CLOUDINARY_SECRET
  );
  return { timestamp, signature };
}
