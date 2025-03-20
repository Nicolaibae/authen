import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db"
import authRouter from "../src/router/auth.routes"
import morgan from "morgan"
import fs from "fs";
import path from "path";

const app = express()
dotenv.config()
connectDB()
app.use(
    cors({
      origin: "*",
    })
  );
  const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });



app.use(morgan("dev"))
app.use(morgan("combined", { stream: logStream }));

app.route("/api/auth",authRouter)

app.use(express.json())
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});