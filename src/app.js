import express from "express"
import { pool } from "./config/db.js";
import { authRoutes } from "./routes/auth.js";

const app = express();
app.use(express.json())

app.use(authRoutes)

app.listen(3000)