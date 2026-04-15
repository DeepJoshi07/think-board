import express from "express";
import notesRouter from "./routes/notes.route.js"

const PORT = 5001;

const app = express();

app.use("/api/notes",notesRouter)

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
})