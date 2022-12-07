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
      <div style={navstyle}>
        <a style={astyle} href="">
          Home
        </a>
        <a style={astyle} href="">services</a>
        <a style={astyle} href="">Profile</a>
        <a style={astyle} href="">Contact us</a>
      </div>
    );
  }
export default Nav;