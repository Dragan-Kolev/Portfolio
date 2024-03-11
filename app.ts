import bodyParser, { BodyParser } from "body-parser";
import express, { Express, Request, Response, Router } from "express";

const app: Express = express();
const body_parser: BodyParser = bodyParser;
const path = require('path');
const router: Router = require('./routing/router');

const port = process.env.port || 3000;


app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TS server.');
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
