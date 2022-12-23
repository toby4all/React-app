import {useEffect,useState} from 'react'

function Users(props) {
    const[users, setUsers]= useState([])
    useEffect(()=>{
      getData()
    },[])
    const getData=()=>{
        fetch("http://localhost:4001/users/userdata")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setUsers(data.results)
        })
    }
    
  return (
    <div>
        <h2>Users information</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus repellendus
             recusandae delectus ab itaque id porro, 
             aliquid quia libero sint vero laborum mollitia,
              praesentium ducimus adipisci, aperiam laudantium corporis.</p>
    </div>
  )
}

export default Users;