import { useState,useEffect } from "react";
import UserAction from "../userAction";
import { useDispatch, useSelector} from "react-redux";


let UserComp=(props)=>{
    const [state, setState]= useState([]);
    const dispatch= useDispatch()
    const userData= useSelector((storeData)=> storeData.nameReducer.users);
     console.log('useSelector',userData)
     
    useEffect(()=>{
        if(userData.length ===0){
            fetch("https://randomuser.me/api/?results=40")
            .then((res) => res.json())
            .then((data) => {
              console.log(data.results);
              UserAction(data.results, dispatch)
              setState(data.results);
            });

        }else{ setState(userData)
   
        };
    },[]);
   
    return (
        <div style={{ padding: "50px" }}>
          <h2>User Redux Component</h2>
          {state.length > 0 ? (
            <ol>
              {state.map((ele, index) => {
                return <li key={index + 1}>{ele.name.first+ " " 
                +ele.name.last}</li>;
              })}
            </ol>
          ) : (
            <div>
              <h2>Loading.....</h2>
            </div>
          )}
        </div>
      );
};
export default UserComp;
