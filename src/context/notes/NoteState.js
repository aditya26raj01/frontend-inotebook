import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {

    // HOST Address
    const host = "http://localhost:5000";

    // Notes Array contains a note - State
    const [notes, setNotes] = useState([]);

    // Get All Notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/note/fetchallnote`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1NWIzNmE2ODFiYTYzN2FmOWEyY2FjIn0sImlhdCI6MTY2NjY5ODkxM30.8AxuxWDBzdrjmXI_smFbe6Kw-mM85qrMXGPhpxia_s8"
            }
        });
        const json = await response.json();
        setNotes(notes.concat(json));
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
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
    }

    // Delete Note
    const deleteNote = async (id) => {
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
    }

    // Edit Note
    const [toUpdate, setToUpdate] = useState([])
    const editNote = async (id, title, description, tag) => {
        // API Call 
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
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            if (newNotes[index]._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }setNotes(newNotes)
    }


    return (
        <NoteContext.Provider value={{ notes: notes, toUpdate:toUpdate, addNote: addNote, deleteNote: deleteNote, editNote: editNote, getNotes: getNotes ,setToUpdate:setToUpdate}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;