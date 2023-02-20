import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import router from "./routes/routes.js"

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err)
});

db.once("connected", () => {
  console.log("Database is connected")
});

const app = express();

app.use(express.json());
app.use("/api", router);

app.get("/", (res, req) => {
  req.send("Welcome!");
});

app.listen(5001, () => {
  console.log("Server is listening at port 5001...");
});
