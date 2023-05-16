"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
var httpsOptions = {
    key: fs_1.default.readFileSync("/Users/thelegend/customerservice/app_key.key"),
    cert: fs_1.default.readFileSync("/Users/thelegend/customerservice/app_cert.pem")
};
http_1.default.createServer(app).listen(8085);
https_1.default.createServer(httpsOptions, app).listen(4431);
app.use('/', (req, res) => {
    res.send('Hello world!');
});
app.listen(80, () => {
    console.log('SERVER IS UP ON PORT:', 8085);
});
app.listen(443, () => {
    console.log('SERVER IS UP ON PORT:', 4431);
});
