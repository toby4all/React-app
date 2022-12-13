import {useState} from "react";
import myAction from "./action";
function Input(props){
    const[state, setState]=useState("")
    const sendDatatoAction=()=>{
        myAction(state)
    };
    return(
        <div style={{
            padding:'20px 100px'
        }}>
            <h2>input component</h2>
            <input type="text" placeholder="Enter some text"
             onChange={(event)=>{setState(event.target.value)}}/>
            <button onClick={sendDatatoAction}>Submit</button>
        </div>
    )
};
export default Input; 