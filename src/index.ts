import express from "express";
import indexRouter from "../routes/index.route";
import connectToDB from "../utils/db";

const app = express();
const PORT = 3000;

app.use("/", indexRouter);

async function startServer() {
  await connectToDB();

  app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
  });
}

startServer();
