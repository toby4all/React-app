import { Link } from "react-router-dom";
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
      </div>
     </div>
    );
  }
export default Nav;