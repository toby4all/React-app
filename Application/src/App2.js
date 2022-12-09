import Nav from "./Component/Nav"
import "./App2.css";
import A from "./Component/context/Acomp";
import Parent from "./Component/Parent/Parent";
import MainProfile from "./Component/Profile/Mainprofile";
import HomeProduct from "./Component/Products/Homeproduct";
import Home from "./Component/Homepage/Home";
import Jewelery from "./Component/Products/Jewelery";
import Electronic from "./Component/Products/Electronic";
import {Route, Routes} from "react-router-dom"


function App2(){
    return(
    <div classname="container">
      <Nav/>
     <Routes>
      <Route path="/Homepage" element={<Home/>}></Route>
        <Route path="/Profile" element={<MainProfile/>}> 
        </Route>
        <Route path="/contex" element={<A/>}> 
        </Route>
        <Route path="/Parent" element={<Parent/>}> 
        </Route>
        <Route path="/Products" element={<HomeProduct/>}>
         <Route path="Electronic" element={<Electronic/>}/>
         <Route path="Jewelery" element={<Jewelery/>}/>
        </Route>
     </Routes>
    </div>

    )

}
export default App2