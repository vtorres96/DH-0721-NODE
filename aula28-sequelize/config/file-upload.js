const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '..', 'public', 'uploads'),
  filename: function(req, file, cb) {
     cb(null, Date.now() + '-' + file.originalname)
  }
});

module.exports = storage;