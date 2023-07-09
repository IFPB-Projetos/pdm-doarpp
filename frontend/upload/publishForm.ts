import axios from "axios";

const cloudName = "dlwoimstk";
const apiKey = "378278351497316";

function handleFileChange(e) {
  const file = e.srcElement.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    if (imagePlaceholder) {
      imagePlaceholder.remove();
    }
    imageDisplay.src = reader.result;
  };
  reader.readAsDataURL(file);
}

async function uploadImage() {
  const signatureResponse = await axios.get("/api/v1/upload/signature");

  const uploadData = new FormData();
  uploadData.append("api_key", apiKey);
  uploadData.append("file", fileInput.files[0]);
  uploadData.append("signature", signatureResponse.data.signature);
  uploadData.append("timestamp", signatureResponse.data.timestamp);

  const uploadRes = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    uploadData,
    {
      onUploadProgress: handleUploadProgress,
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return uploadRes;
}

async function handleSubmit(e) {
  e.preventDefault();

  if (fileInput.files.length) {
    const uploadRes = await uploadImage();
    versionInput.value = uploadRes.data.version;
    publicIdInput.value = uploadRes.data.public_id;
    signatureInput.value = uploadRes.data.signature;
  }

  publishForm.submit();
}
