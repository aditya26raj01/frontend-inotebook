import React,{useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const EditNote = (props) => {
    const context = useContext(noteContext);
    const { toUpdate, editNote } = context;
    let navigate = useNavigate();
    const [note, setNote] = useState({title:toUpdate.title, description:toUpdate.description, tag:toUpdate.tag})

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    const handelClick = (e) => {
        e.preventDefault();
        try {
            editNote(toUpdate._id, note.title, note.description, note.tag);
            navigate("/");
            props.showAlert("Sucessfully Updated the Note","success");
        } catch (error) {
            navigate("/");
            props.showAlert("Some error Occured!","danger");
        }
    }
    return (
        <>
            <h1>Update Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" value={note.title} onChange={onChange}  className="form-control" id="title"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="descriptioon" className="form-label">Description</label>
                    <input type="text"  value={note.description} onChange={onChange}   name="description" className="form-control" id="description"  />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" value={note.tag} onChange={onChange}  name="tag" className="form-control" id="tag"  />
                </div>

                <button type="submit" disabled={note.title.length<5 || note.description.length<5 || note.tag.length<3} onClick={handelClick} className="btn btn-primary" >Save Changes</button>
            </form>
        </>
    )
}

export default EditNote