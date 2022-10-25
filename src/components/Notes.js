import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = (props) => {
    let navigate = useNavigate();
    const context = useContext(noteContext);
    const { notes, setToUpdate } = context;

    const updateNote = (note) => {
        setToUpdate(note);
        navigate("/edit");
    }

    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container">
                    {notes.length === 0 && "No Notes to Display"}
                </div>
                {notes.map((note, index) => {
                    return <NoteItem note={note} showAlert={props.showAlert} updateNote={updateNote} key={index} />;
                })}
            </div>
        </>
    )
};

export default Notes;