import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;

    return (
        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note,index) => {
                return <NoteItem note={note} key={index} />;
            })}
        </div>
    )
};

export default Notes;