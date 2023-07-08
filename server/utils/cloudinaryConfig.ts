// Require the cloudinary library
const cloudinary = require('cloudinary').v2;
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUD,
    api_secret: process.env.API_SECRET,
  });

  export async function handleUpload(file:any) {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return res;
  }
  