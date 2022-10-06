// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'duoehn6px', 
    api_key: '573468728691948', 
    api_secret: 'iuj_i5b8XLiBi5GDtEtUPcqfe_0' 
  });

module.exports = cloudinary;
