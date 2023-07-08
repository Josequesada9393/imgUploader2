"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploads_1 = require("../controllers/uploads");
const Multer_1 = require("../utils/Multer");
const router = express_1.default.Router();
router.post('/', Multer_1.upload.single('my_file'), uploads_1.UpImage);
exports.default = router;
