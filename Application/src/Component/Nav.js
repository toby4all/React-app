import { Link } from "react-router-dom";
// import Home from "./Homepage/Home";
var Nav=()=>{
    var navstyle = {
      backgroundColor: "black",
      textAlign: "right",
      padding: "20px",
      
    };
    var astyle = {
      textDecoration: "none",
      color: "white",
      marginRight: "20px"
    };
    return (
     <div className="mainstyle">
       <div style={navstyle}>
        <Link style={astyle} to="./Homepage">
          Home
        </Link>
        <Link style={astyle} to="/Profile">Profile</Link>
        <Link style={astyle} to="/Products">Product</Link>
        <Link style={astyle} to="Acomp">Context</Link>
        <Link style={astyle} to="/Parent">Contact us</Link>
        <Link style={astyle} to ="/Redux">Redux</Link>
        <Link style={astyle} to = "/class">More</Link>
      </div>
      {/* <div>{<Home/>}</div> */}
     </div>
    );
  }
export default Nav;