import React,{useContext} from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    // const checkUser = (userID)=>{
    //     if(note.user===userID){
    //         document.querySelector
    //     }
    // }
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div id="options">
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id, props.showAlert)}}></i>
                    <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(note)}} ></i>
                    </div>
                    {/* {checkUser(note.user)} */}
                </div>
            </div>
        </div>
    )
}

export default NoteItem;