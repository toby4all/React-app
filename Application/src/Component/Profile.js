import { useState } from "react";
var Profile= ()=>{ 
    let[data, setData]= useState({
    Firstame:'Jackson',
    Lastname:'Martinez',
    Email: 'kacs@gmail.com',
    img:'https://media.istockphoto.com/id/466901292/pl/zdj%C4%99cie/pewnie-biznesmen-portret.jpg?s=612x612&w=0&k=20&c=Uy3EiRVemNCKo4H6UIE53cmYGO8SlUBVoKKYXGBUec4='
    });
  
    let[Mode, setmode]= useState({text:'check to swtch to dark mode'
    }
    );
    function updatefemaleProfile(){
        setData({
            Firstame:'Lesley',
            Lastname:'Willock',
            Email: 'les345@gmail.com',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnDEtdNgL2U_zT-ocSMydONOTICURLsX0HQ&usqp=CAU" 
        });
       
    };
    const updatemaleProfile= ()=>{
        setData({Firstame:'Jackson',
        Lastname:'Martinez',
        Email: 'kacs@gmail.com',
        img:'https://media.istockphoto.com/id/466901292/pl/zdj%C4%99cie/pewnie-biznesmen-portret.jpg?s=612x612&w=0&k=20&c=Uy3EiRVemNCKo4H6UIE53cmYGO8SlUBVoKKYXGBUec4='})
    };
    var changeMode =()=>{
        var input= document.getElementById('input')
        var Mainref= document.getElementById('maindiv')
        if(input.checked){setmode(
            {text:'uncheck to switch light mode',Mainref:{style:{
                backroundColor: 'orange',
                color:'white',
                margin:'25px',
                textAlign:'center',
                paddingRight: '20px'
            }}})
           }
            else{
                setmode(
                    {text:'check to switch dark mode'})}
        }

        var constyle={width:'500px',
        textAlign:'center',
        color:'black',
        border: '2px solid black',
        padding:'20px',
        margin:'5px auto',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
    };
    
    return(
            <div id="maindiv" style={Mode.Mainref}
            >
             <div style={constyle}> 
             <img src={data.img} height='400px' width='300px'/>
                <dl>
                <dt>
                <h5>Name </h5>
                <dd><h5>{data.Firstame + " " + data.Lastname}</h5></dd>
                 </dt>
                 <dt><h5>Email</h5>
                 <dd><h5> {data.Email}</h5></dd>
                 </dt>
                 <dd> <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti a
                     dolor cum sapiente adipisci, quis odio error velit rerum quas voluptates
                     officiis magnam nihil voluptatem neque laudantium delectus corporis.
                      </p>
                    </dd>
                </dl>
               
            </div>
            <div style={{ width:'400px',
                   border: '2px solid black',
                    padding: '10px',
                    margin: 'auto',
                   
                }}>
                 <input style={{
                 }} 
                 type='checkbox' onClick={changeMode} id='input'/>{Mode.text}
                <button style={
                    {
                    margin:"0px 20px"
                }}
                onClick={updatemaleProfile}>Jackson</button> 
                 <span><button onClick={updatefemaleProfile}> Lesley</button></span>
                 </div>
            </div>
    );
};
export default Profile;