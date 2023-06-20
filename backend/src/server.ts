import express from "express";
import cors from 'cors';
import Router from "./routes";

const app = express();

app.use(cors());
const port = 3000;



app.use(express.json());

app.use(Router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
