"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const body_parser = body_parser_1.default;
const router = require('./routing/router');
const port = process.env.port || 3000;
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(router);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
