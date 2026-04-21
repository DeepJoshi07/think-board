import express from "express";
import notesRouter from "./routes/notes.route.js";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());

if(process.env.NODE_ENV !== "production"){
  app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
  }));
}

app.use(rateLimiter);

app.use("/api/notes", notesRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
