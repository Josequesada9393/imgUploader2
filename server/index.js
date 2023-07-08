"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addRoutes_1 = __importDefault(require("./uploadRoutes/addRoutes"));
require("dotenv").config();
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json({
    limit: '50mb'
}));
app.get('/', (req, res) => {
    res.send('This is a test web page!');
});
app.use('/addImage', addRoutes_1.default);
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
