import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "635638dfb5344e9e514629a6",
            "user": "6355b36a681ba637af9a2cac",
            "title": "Hello world",
            "description": "this is dercription",
            "tag": "personal",
            "date": "2022-10-24T07:03:59.537Z",
            "__v": 0
        },
        {
            "_id": "635666117a50f714935dc002",
            "user": "6355b36a681ba637af9a2cac",
            "title": "Test Note",
            "description": "test dercription",
            "tag": "personal",
            "date": "2022-10-24T10:16:49.564Z",
            "__v": 0
        }
        ,
        {
            "_id": "635666117a50f714935dc002",
            "user": "6355b36a681ba637af9a2cac",
            "title": "Test Note",
            "description": "test dercription",
            "tag": "personal",
            "date": "2022-10-24T10:16:49.564Z",
            "__v": 0
        }
        ,
        {
            "_id": "635666117a50f714935dc002",
            "user": "6355b36a681ba637af9a2cac",
            "title": "Test Note",
            "description": "test dercription",
            "tag": "personal",
            "date": "2022-10-24T10:16:49.564Z",
            "__v": 0
        }
        ,
        {
            "_id": "635666117a50f714935dc002",
            "user": "6355b36a681ba637af9a2cac",
            "title": "Test Note",
            "description": "test dercription",
            "tag": "personal",
            "date": "2022-10-24T10:16:49.564Z",
            "__v": 0
        }
        ,
        {
            "_id": "635666117a50f714935dc002",
            "user": "6355b36a681ba637af9a2cac",
            "title": "Test Note",
            "description": "test dercription",
            "tag": "personal",
            "date": "2022-10-24T10:16:49.564Z",
            "__v": 0
        }
        ,
        {
            "_id": "635666117a50f714935dc002",
            "user": "6355b36a681ba637af9a2cac",
            "title": "Test Note",
            "description": "test dercription",
            "tag": "personal",
            "date": "2022-10-24T10:16:49.564Z",
            "__v": 0
        }
        ,
        {
            "_id": "635666117a50f714935dc002",
            "user": "6355b36a681ba637af9a2cac",
            "title": "Test Note",
            "description": "test dercription",
            "tag": "personal",
            "date": "2022-10-24T10:16:49.564Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes:notes,setNotes:setNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;