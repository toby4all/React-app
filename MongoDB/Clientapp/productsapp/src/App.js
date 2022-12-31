import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Component/Products/Nav/Nav';
import Users from './Component/Products/Users/Users';
import NewUsers from './Component/Products/Users/NewUsers';
import UserDetails from './Component/Products/Users/UserDetails';
import UserUpdate from './Component/Products/Users/UserUpdate';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path='/' element={
        <div style={{
          color:"red"
        }}>
        <h2>Home component under development</h2>
        </div>
      }/>
     <Route path='/Users' element={<Users/>}/>
     <Route path='/NewUsers' element={<NewUsers/>}/>
     <Route path='/UserDetails/:id' element={<UserDetails/>}/>
     <Route path="/UserUpdate/:id" element={<UserUpdate/>}/>
      </Routes>
    </div>
  );
}

export default App;
