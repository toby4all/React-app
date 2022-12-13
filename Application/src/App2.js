import Nav from "./Component/Nav"
import "./App2.css";
import A from "./Component/Contextcomp/Acomp";
import MainProfile from "./Component/Profile/Mainprofile";
import Parent from "./Component/Parent/Parent";
import HomeProduct from "./Component/Products/Homeproduct";
import Home from "./Component/Homepage/Home";
import Jewelery from "./Component/Products/Jewelery";
import Electronic from "./Component/Products/Electronic";
import Imagecomp from "./Component/class/image";
import Input from "./Component/Redux/input";
import ReceiverComp from "./Component/Redux/Text";
import {Route, Routes} from "react-router-dom"


function App2(){
    return(
    <div className="container">
      <Nav/>
     <Routes>
      <Route path="/Homepage" element={<Home/>}></Route>
        <Route path="/Profile" element={<MainProfile/>}> 
        </Route>
        <Route path="Acomp" element={<A/>}> 
        </Route>
        <Route path="/parent" element={<Parent/>}> 
        </Route>
        <Route path="/class" element={<Imagecomp/>}> 
        </Route>
        <Route path="/Redux" element={<div>
          <Input/>
          <ReceiverComp/>
        </div>}></Route>
        <Route path="/Products" element={<HomeProduct/>}>
         <Route path="Electronic" element={<Electronic/>}/>
         <Route path="Jewelery" element={<Jewelery/>}/>
        </Route>
     </Routes>
    </div>

    )

}
export default App2