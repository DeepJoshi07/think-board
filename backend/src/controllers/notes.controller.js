export const getNotes = (req,res) => {
    res.status(200).send("you got 20 notes")
}

export const addNotes = (req,res) => {
    res.status(201).json({meassage:"Note create successfully!"})
}

export const updateNotes = (req,res) => {
    res.status(200).json({meassage:"Note updated successfully!"})
}

export const deleteNotes = (req,res) => {
    res.status(200).json({meassage:"Note deleted successfully!"})
}

