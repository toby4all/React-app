import {useState} from "react";
import { useDispatch } from "react-redux";
import CityAction from "./CityAction";

function City(props){
    const [city, setCity]= useState("");
    const Dispatch= useDispatch();

    const sendCitytoAction=()=>{
       CityAction(city, Dispatch);
    }
    return(
        <div style={{
            padding:'20px 100px'
        }}>
     <h2>City component</h2>
     <select onChange={(e)=>{setCity(e.target.value)}}>
        <option disabled>select city</option>
        <option>Atlanta</option>
        <option>Chicago</option>
       <option>Maryland</option>
       <option>Ohio</option>
     </select>
     <button  onClick={sendCitytoAction}
      style={{
        marginLeft:'5px',
     }}>Store City</button>
        </div>
    )
}
export default City;