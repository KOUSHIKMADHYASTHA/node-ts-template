import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import someRoute from "./api/routes";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(
  helmet({
    frameguard: false,
  })
);

app.use(
  cors({
    exposedHeaders: ["Content-Disposition"],
  })
);

const PORT = process.env.PORT;

app.use("/", someRoute);

app.listen(PORT, () => {
  console.log("Running on Port: ", PORT);
});
