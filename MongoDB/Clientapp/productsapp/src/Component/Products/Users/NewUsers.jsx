import {useState} from 'react'
import "./NewUser.css"

function NewUsers() {
 const[state, setState]= useState({
  name: "",
  email: "",
  image:"",
  city:"",

 });
 const sendDataToServer=()=>{
  fetch("http://localhost:4001/users/newUsers",{
   method:"POST",
   body:JSON.stringify(state),
   headers:{
    "CONTENT-TYPE":"application/json",
   },
   
 })
 .then((res)=>res.json())
 .then((data)=>{
  console.log(data)
  alert(data.msg)
  setState({
    name: "",
  email: "",
  image:"",
  city:"",

  })
 } 
 )
 };
 
  
  return (
    <div className='formContainer'>
      <div><input onChange={(event)=>{
        setState({
          ...state,
          name:event.target.value
        })

      }} type="text"
       placeholder='Enter name'/>
      </div>
      <div><input onChange={(event)=>{
        setState({
          ...state,
          email:event.target.value
        })}}
      type="text"
       placeholder='Enter email' />
       </div>
     
      <div><input onChange={(event)=>{
        setState({
          ...state,
          city:event.target.value
        })}}
      type="text"
       placeholder='Enter city'/>
       </div>
     
      <div><input onChange={(event)=>{
        setState({
          ...state,
          image:event.target.value
        })}}
       type="text"
       placeholder='Enter user image url'/> 
       </div> &nbsp;&nbsp;
       <div>
        <button onClick={sendDataToServer}>Register new user</button></div>  
       </div>
  )
};

export default NewUsers