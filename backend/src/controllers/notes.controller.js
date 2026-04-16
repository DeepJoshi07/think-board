import Notes from "../model/notes.js";

export const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.error("Error message : ", error);
      return res.status(500).json({ message: "internal server error!" });
    }
  };
};

// const note = await Notes.find().sort({createdAt: -1}); newest comes first

export const getNotes = async (req, res) => {
  const notes = await Notes.find().sort({createdAt:-1});
  return res.status(200).json(notes);
};

export const getNote = async (req, res) => {
  const { id } = req.params;
  const note = await Notes.findById(id);
  if (!note) return res.status(404).json({ message: "Note not found!" });
  return res.status(200).json(note);
};

export const addNotes = async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Notes({ title, content });
  await newNote.save();
  return res.status(201).json({ message: "Note created successfully!" });
};

export const updateNotes = async (req, res) => {
  const { title, content } = req.body;
  const updatedNote = await Notes.findByIdAndUpdate(req.params.id, {
    title,
    content,
  });
  if (!updatedNote) return res.status(404).json({ message: "Note not found!" });
  return res.status(200).json({ message: "Note updated successfully!" });
};

export const deleteNotes = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const deletedNote = await Notes.findByIdAndDelete(id);
  if (!deletedNote) return res.status(404).json({ message: "Note not found!" });
  return res.status(200).json({ message: "Note deleted successfully!" });
};
