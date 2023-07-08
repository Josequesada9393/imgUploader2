

const Multer = require('multer')
const storage = new Multer.memoryStorage();

export const upload:any = Multer({
  storage,
});
