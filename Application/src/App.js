import './App.css';
import CreateCard from "./Component/Card";
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Profile from './Component/Profile';


function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="card">
        <CreateCard
        img="https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
         name="Micheal"
         gender="Male"
        />
        <CreateCard
         img="https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?b=1&s=170667a&w=0&k=20&c=0aBawAGIMPymGUppOgw1HmV8MNXB1536B3sX_PP9_SQ=" 
         name="Jenifer"
          gender="Female"
         />
        <CreateCard
         img="https://eddie-hernandez.com/wp-content/uploads/2021/03/NT-Professional_Headshot_Seated-Business-Portrait-02.jpg"
          name="Audrey" 
          gender="Female"
         />
        <CreateCard
         img="https://www.rhondaboyle.com/wp-content/uploads/2017/05/Man_black_professional-e1495580003270.jpeg" 
         name="Jason" 
         gender="Male"
         />
         </div>
         <Profile/>
         <Footer/>
    </div>
  );
}

export default App;
