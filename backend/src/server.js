import express from "express";
import notesRouter from "./routes/notes.route.js"
import {connectDB} from "./config/db.js"
import "dotenv/config"

const PORT = process.env.PORT;

const app = express();

connectDB()

app.use("/api/notes",notesRouter)

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
})