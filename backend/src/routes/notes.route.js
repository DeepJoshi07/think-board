import express from "express"
import { addNotes, deleteNotes, getNotes, getNote, updateNotes, asyncWrapper } from "../controllers/notes.controller.js"

const router = express.Router()

router.get("/",asyncWrapper(getNotes))

router.get("/:id",asyncWrapper(getNote))

router.post("/",asyncWrapper(addNotes))

router.put("/:id",asyncWrapper(updateNotes))

router.delete("/:id",asyncWrapper(deleteNotes))

export default router;