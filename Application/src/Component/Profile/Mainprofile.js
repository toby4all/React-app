import React from "react";
import "./Profile.css";
import { useState } from "react";

function MainProfile(props) {
  //   let [name, setName] = useState("Rajiv Mehta");
  //   let [city, setCity] = useState("Delhi");
  //   let [email, setEmail] = useState("Rajiv@gmail.com");
  //   let [image, setImage] = useState(
  //     "https://training.global.psu.edu/assets/images/course-content/GCI_Professional_Suit_Male.jpeg"
  //   );
  let [userdata, setUserData] = useState({
  Firstname: "Jackson",
  Lastname:"Martinez",
    city: "Atlanta Geogia",
    email: "jack1212@gmail.com",
    image:
      "https://media.istockphoto.com/id/466901292/pl/zdj%C4%99cie/pewnie-biznesmen-portret.jpg?s=612x612&w=0&k=20&c=Uy3EiRVemNCKo4H6UIE53cmYGO8SlUBVoKKYXGBUec4=",
  });

  let [bgColor, setBgColor] = useState("white");
  let [textColor, setTextColor] = useState("black");
  let[textChange, setTexchnage]= useState("check to switch dark mode")

  const changeData = (event) => {
    // alert(event.target.innerText);
    if (event.target.innerText === "Lesley") {
      setUserData({
        Firstname: "Lesley",
        Lastname:"Willock",
        city: "Cleveland Ohio",
        email: "lesley212@gmail.com",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnDEtdNgL2U_zT-ocSMydONOTICURLsX0HQ&usqp=CAU",
      });

      //   setName("Chris");
      //   setCity("Mumbai");
      //   setEmail("Chris@gmail.com");
      //   setImage(
      //     "https://th.bing.com/th/id/OIP.9Nr-W1-pxSrgdwDTqrpwEgHaLG?pid=ImgDet&rs=1"
      //   );
    } else {
      setUserData({
        Firstname: "Jackson",
        Lastname:"Martinez",
        city: "Pune",
        email: "jack1212@gmail.com",
        image:"https://media.istockphoto.com/id/466901292/pl/zdj%C4%99cie/pewnie-biznesmen-portret.jpg?s=612x612&w=0&k=20&c=Uy3EiRVemNCKo4H6UIE53cmYGO8SlUBVoKKYXGBUec4=",
      });
      //   setName("Rahiv");
      //   setCity("Delhi");
      //   setEmail("Rajiv@gmail.com");
      //   setImage(
      //     "https://training.global.psu.edu/assets/images/course-content/GCI_Professional_Suit_Male.jpeg"
      //   );
    }
  };

  const changeColor = (event) => {
    // alert(event.target.checked);
    if (event.target.checked) {
      setBgColor("black");
      setTextColor("white");
      setTexchnage("uncheck to switch lightMode")
    } else {
      setBgColor("white");
      setTextColor("black");
      setTexchnage("check to switch dark mode")
    }
  };

  return (
    <div
      className="profileContainer"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div style={{ width: "35%" }}>
        <img src={userdata.image} width="100%" height="100%" />
      </div>

      <div style={{ width: "65%", padding: "30px" }}>
        <dl>
          <dt>
            <b>User Name:</b>
          </dt>
          <dd>{userdata.Firstname+ " "+ userdata.Lastname}</dd>
          <dt>
            <b>User City:</b>
          </dt>
          <dd>{userdata.city}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{userdata.email}</dd>
          <dt>
            <b>Description:</b>
          </dt>
          <dd>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            illo ratione rem autem exercitationem blanditiis iure nam! Culpa
            perspiciatis dolorem quo eveniet cupiditate minus aliquid ducimus
            nam! Fugit, quibusdam rem!
          </dd>
        </dl>
        <button className="btn" onClick={changeData}>Jackson</button>&nbsp;&nbsp;
        <button onClick={changeData}>Lesley</button>
        <br />
        <br />
        <input type="checkbox" onChange={changeColor} /> {textChange}
      </div>
    </div>
  );
}

export default MainProfile;