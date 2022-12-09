import { useState } from "react";
import "./Parent.css";
import Child from "../child/child";

function Parent(props) {
  const [state, setState] = useState("No Data");
  const [childData, setChildData] = useState("");

  const sendData = () => {
    // var inputData = document.getElementById("i1").value;
    // setState(inputData);

    setState(document.getElementById("i1").value);
  };
  var parentContainer={
    width: '500px',
    padding: '50px',
    margin: '50px auto',
    boxShadow:'0 0 10px red',
    textAlign: 'center',
};

  return (
    <div className="parentContainer" style={parentContainer}>
      <h2>Parent Component</h2>
      <input type="text" placeholder="Enter Text" id="i1" />
      <button onClick={sendData}>Submit</button>
      <p>Child Data :{childData} </p>
      <Child data={state} fn={setChildData} />
    </div>
  );
}

export default Parent;