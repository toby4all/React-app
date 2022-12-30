import {useEffect,useState} from 'react'
import "./Users.css"
import { Link } from 'react-router-dom'

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

     {users.length>0 ?( <table cellPadding={10} >
      <thead style={{
        backgroundColor:"black",
        color: "white",
      }}>
        <tr>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th colSpan={3}>ACTIONS</th>
        </tr>
        </thead>
        <tbody align= "center">
          {
            users.map((ele, index)=>{
              return (
                <tr>
                  <td><img src={ele.image} width="80" height="70" alt='User image'
                  style={{
                    borderRadius: "50%"
                  }}
                  /></td>
                  <td>{ele.name}</td>
                  <td>{ele.gender}</td>
                  <td>
                  <Link to={`/UserDetails/${ele._id}`}>
                  <button>Details</button>
                  </Link>
                  
                    </td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
     </table>


     )    :(<div>No data</div>)

     }
    </div>
  )
}

export default Users;