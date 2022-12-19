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
import City from "./Component/Redux/City";
import UserComp from "./Component/Redux/Redux task/UserComp";
import ProductDetails from "./Component/Products/productdetails";
import {Route, Routes, Navigate} from "react-router-dom"


function App2(){
    return(
    <div className="container">
      <Nav/>
     <Routes>
     <Route path="" element={<Navigate to='Homepage'/>}></Route>
      <Route path="/Homepage" element={<Home/>}></Route>
        <Route path="/Profile" element={<MainProfile/>}> 
        </Route>
        <Route path="Acomp" element={<A/>}> 
        </Route>
        <Route path="/parent" element={<Parent/>}> 
        </Route>
        <Route path="/class" element={<Imagecomp/>}> 
        </Route>
        <Route path="/Redux" element={<div style={{display:'flex'}}>
        <UserComp/>
          <Input/>
          <ReceiverComp/>
          <City/>
        </div>}></Route>
        <Route path="/Products" element={<HomeProduct/>}>
         <Route path="" element={<Navigate to="Electronic"/>}/>
         <Route path="Electronic" element={<Electronic/>}/>
         <Route path="Jewelery" element={<Jewelery/>}/>
        </Route>
        <Route path="/productdetails/:id" element={<ProductDetails/>}/>
     </Routes>
    
    </div>

    )

}
export default App2