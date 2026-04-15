import express from "express"
import { addNotes, deleteNotes, getNotes, updateNotes } from "../controllers/notes.controller.js"

const router = express.Router()

router.get("/",getNotes)

router.post("/",addNotes)

router.put("/:id",updateNotes)

router.get("/:id",deleteNotes)

export default router;