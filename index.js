import cors from "cors";
import express, { json } from "express";
import helmet from 'helmet'

import "./db/mongoose.js";
import allRoutes from './routes/index.js'


const app = express();

const PORT = process.env.port || 3000;


app.use(json());
app.use(helmet())


app.use(cors({ origin: '*' }));

app.get("/", (req, res) => res.send("Hello World!"));
app.use(allRoutes)
app.listen(PORT, () => console.log(`Example app listening on ${PORT}!`));
