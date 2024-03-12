import bodyParser, { BodyParser } from "body-parser";
import express, { Express, Router } from "express";
import path from 'path';

const app: Express = express();
const body_parser: BodyParser = bodyParser;
const router: Router = require('./routing/router');

const port = process.env.port || 3000;


app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
