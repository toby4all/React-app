import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


function UserDetails(props) {
    const[User, setUser]=useState([])
    const{id}= useParams()
  useEffect(()=>{
    fetch(`http://localhost:4001/users/specificuser/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
     console.log(data)
     setUser(data.results)
    })
  },[]);
  const backToUser= (event)=>{ 
      <Link to="Users"/>
  }
     var cardstyle={
        width:"300px",
        margin: "60px auto",
        padding:"10px",
        boxShadow: "0 0 10px black",
        textAlign:"center"
     }
  return (
    <div>
        { User.length >0 ? (
     <div style={cardstyle}>
     <img src={User[0].image} width="100%"
      height="300px" alt='User image'/>
      <h3>{User[0].name}</h3>
      <h4>{User[0].gender}</h4>
      <h4>{User[0].email}</h4>
      <h4>{User[0].city}</h4>
      <button onClick={backToUser(this)} style={{ 
        backgroundColor:"black",
        color:"white",
        padding:"10px",
        borderRadius:"20%"}}>back to users
       </button>
     
      
        </div>
        )
         : (
            <div>
                <h3>Loading............</h3>
            </div>
        )
    };
    </div>
  );
};

export default UserDetails