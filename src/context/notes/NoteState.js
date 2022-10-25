import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {

    // HOST Address
    const host = "http://localhost:5000";

    // Notes Array contains a note - State
    const [notes, setNotes] = useState([]);

    // Get All Notes
    const getNotes = async () => {
        try {
            const response = await fetch(`${host}/api/note/fetchallnote`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1NWIzNmE2ODFiYTYzN2FmOWEyY2FjIn0sImlhdCI6MTY2NjY5ODkxM30.8AxuxWDBzdrjmXI_smFbe6Kw-mM85qrMXGPhpxia_s8"
                }
            });
            const json = await response.json();
            setNotes(notes.concat(json));
        } catch (error) {
            console.log("Error in getNotes - NoteState.js");
        }
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        try {
            const response = await fetch(`${host}/api/note/addnote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1NWIzNmE2ODFiYTYzN2FmOWEyY2FjIn0sImlhdCI6MTY2NjY5ODkxM30.8AxuxWDBzdrjmXI_smFbe6Kw-mM85qrMXGPhpxia_s8"
                },
                body: JSON.stringify({ title: title, description: description, tag: tag })
            });
            const note = await response.json();
            setNotes(notes.concat(note));
        } catch (error) {
            console.log("Error in addNotes - NoteState.js");
        }
    }

    // Delete Note
    const deleteNote = async (id, showAlert) => {
        try {
            const response = await fetch(`${host}/api/note/deletenote/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1NWIzNmE2ODFiYTYzN2FmOWEyY2FjIn0sImlhdCI6MTY2NjY5ODkxM30.8AxuxWDBzdrjmXI_smFbe6Kw-mM85qrMXGPhpxia_s8"
                }
            });
            const deletedNotesArray = notes.filter((note) => {
                return note._id !== id;
            })
            setNotes(deletedNotesArray);
            showAlert("Note Sucessfully Deleted!", "success")
        } catch (error) {
            showAlert("Some error occured!", "danger")
            console.log("Error in deleteNotes - NoteState.js");
        }
    }

    // Edit Note
    const [toUpdate, setToUpdate] = useState([])
    const editNote = async (id, title, description, tag) => {
        try {
            const response = await fetch(`${host}/api/note/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1NWIzNmE2ODFiYTYzN2FmOWEyY2FjIn0sImlhdCI6MTY2NjY5ODkxM30.8AxuxWDBzdrjmXI_smFbe6Kw-mM85qrMXGPhpxia_s8"
                },
                body: JSON.stringify({ title: title, description: description, tag: tag })
            });
            const json = response.json();
            // DeepCopy
            let newNotes = await JSON.parse(JSON.stringify(notes));
            for (let index = 0; index < newNotes.length; index++) {
                if (newNotes[index]._id === id) {
                    newNotes[index].title = title;
                    newNotes[index].description = description;
                    newNotes[index].tag = tag;
                    break;
                }
            } setNotes(newNotes)
        } catch (error) {
            console.log("Error in editNotes - NoteState.js");
        }
    }
    
    return (
        <NoteContext.Provider value={{ notes: notes, toUpdate: toUpdate, addNote: addNote, deleteNote: deleteNote, editNote: editNote, getNotes: getNotes, setToUpdate: setToUpdate }} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;