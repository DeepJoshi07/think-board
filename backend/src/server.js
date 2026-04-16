import express from "express";
import notesRouter from "./routes/notes.route.js";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import rateLimiter from "./middleware/rateLimiter.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
