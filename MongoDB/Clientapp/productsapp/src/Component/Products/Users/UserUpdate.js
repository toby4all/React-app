import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import "./NewUser.css"


function UserUpdate() {
  const{id}=useParams()
  const[state, setState]= useState({
    name:"",
    email:"",
    gender:"",
    image:"",
    city:"",
   
   });
  useEffect(()=>{
    fetch(`http://localhost:4001/users/specificuser/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setState({
        name: data.results[0].name,
        email: data.results[0].email,
        gender: data.results[0].gender,
        image:data.results[0].image,
        city:data.results[0].city,

      })
    })
  }, [])

  const sendData= ()=>{
    fetch(`http://localhost:4001/users/updateuser/${id}`,
    {
      method:"PUT",
      body:JSON.stringify(state),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
    console.log(data)
    alert(data.msg)
    setState({name:"",
    email:"",
    gender:"",
    image:"",
    city:"",

    })
    })
  }
  return (
    <div className='formContainer'>
      <div><input onChange={(event)=>{
        setState({
          ...state,
          name:event.target.value
        })

      }} type="text"
       placeholder='Enter name' value={state.name}/>
      </div>
      <div><input onChange={(event)=>{
        setState({
          ...state,
          email:event.target.value
        })}}
      type="text"
       placeholder='Enter email' value={state.email} />
       </div>
     
      <div><input onChange={(event)=>{
        setState({
          ...state,
          city:event.target.value
        })}}
      type="text"
       placeholder='Enter city' value={state.city}/>
       </div>
     
      <div><input onChange={(event)=>{
        setState({
          ...state,
          image:event.target.value
        })}}
       type="text"
       placeholder='Enter user image url' value={state.image}/> 
       </div> 
        <div>
          Male<input type="radio" name='gender' value="Male"
         onChange={(event)=>{
          setState({
            ...state,
            gender:event.target.value
          })
         }}
          
          />&nbsp;
         Female <input type="radio" name='gender' value="Female"
          onChange={(event)=>{
         setState({
          ...state,
          gender:event.target.value
         })
          }}/>
          </div>&nbsp;&nbsp;
       <div>
        <button onClick={sendData}>Register new user</button>
        <button>Back to users</button>
        </div>  
       </div>
  )
}

export default UserUpdate