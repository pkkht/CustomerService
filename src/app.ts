import express, { Application, Request, Response } from 'express';
import fs from 'fs';
import https from 'https';
import http from 'http';

const app: Application = express();

var httpsOptions = {
    key: fs.readFileSync("/Users/thelegend/customerservice/app_key.key"),
    cert: fs.readFileSync("/Users/thelegend/customerservice/app_cert.pem")
  };
  http.createServer(app).listen(8085);
  https.createServer(httpsOptions, app).listen(4431)

app.use('/', (req: Request, res: Response): void => {
    res.send('Hello world!');
});

app.listen(80, (): void => {
    console.log('SERVER IS UP ON PORT:', 8085);
});

app.listen(443, (): void => {
    console.log('SERVER IS UP ON PORT:', 4431);
});