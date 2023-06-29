import express, { Express } from "express";
import cors from "cors";
import todoRoutes from "./routes/index";
import mongoose from "mongoose";

const app: Express = express();

const PORT: string | number = process.env.PORT || 9001;

app.use(cors());
app.use(todoRoutes);

const uri: string = "mongodb://localhost:27017/";

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
  )
  .catch((error) => {
    throw error;
  });

const app: Express = express();
const PORT: string = process.env.PORT || 4000;
app.use(cors());
app.use(todoRoutes);

const uri: string = "mongodb://localhost:27017/";
mongoose
  .connect(uri)
  .then(() => app.listen(PORT, () => console.log("Server is on")))
  .catch((err) => {
    console.error(err);
  });
