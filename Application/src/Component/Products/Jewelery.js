import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import ProductDetails from "./productdetails";
function Jewelery(props) {
  const[state, setState]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data)
      });
  };
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Jewelery Component</h2>
        { state.length > 0 ? 
     <ul type='none'>
      { state.map((ele)=>{
        return(
        <li style={{ margin:"20px"}}>
       <Link to={`/productdetails/${ele.id}`} style={{
        color:'blue',
       
       }}>{ele.title}</Link>
          </li>)
      })

      }
     </ul>
      : <div style={{
        display:'grid',
        justifyContent:'center',
        alignItems:'center'
      }}>
      <h2>Loading.....</h2>
     </div>

     }
      </div>
    );
  }
  
  export default Jewelery;