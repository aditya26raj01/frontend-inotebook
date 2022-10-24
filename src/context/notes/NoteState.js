import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const defaultState = {
        "name":"Harry",
        "class":"5B"
    }
    const [state, setState] = useState(defaultState);
    
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name":"Aditya",
                "class":"CSE"
            })
        }, 1000);
    }
    
    return (
        <NoteContext.Provider value={{state:state,update:update}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;