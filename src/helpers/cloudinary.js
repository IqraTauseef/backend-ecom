const cloudinary = require("cloudinary").v2;
const multer = require("multer");

require("dotenv").config();

cloudinary.config(process.env.CLOUDINARY_URL);
// console.log(process.env.CLOUDINARY_URL);

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
