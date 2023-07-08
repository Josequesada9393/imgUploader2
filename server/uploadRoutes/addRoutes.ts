import express from 'express'
import {UpImage} from '../controllers/uploads'
import { upload } from '../utils/Multer';
const router = express.Router()


router.post('/', upload.single('my_file'), UpImage)




export default router
