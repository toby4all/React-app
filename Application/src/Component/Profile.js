import { useState } from "react";
var Profile= ()=>{ 
    let[data, setData]= useState({
    Firstame:'Jackson',
    Lastname:'Martinez',
    Email: 'kacs@gmail.com',
    img:'https://media.istockphoto.com/id/466901292/pl/zdj%C4%99cie/pewnie-biznesmen-portret.jpg?s=612x612&w=0&k=20&c=Uy3EiRVemNCKo4H6UIE53cmYGO8SlUBVoKKYXGBUec4='
    });
    function updateProfile(){
        setData({
            Firstame:'Lesley',
            Lastname:'Willock',
            Email: 'les345@gmail.com',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnDEtdNgL2U_zT-ocSMydONOTICURLsX0HQ&usqp=CAU" 
        });
    };
    var constyle={width:'500px',
        color:'black',
        border: '2px solid black',
        padding:'20px',
        margin:'10px auto',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    };
    return(
            <div style={{
                margin:'25px',
                textAlign:'center',
                paddingRight: '20px',
            }}>
             <div style={constyle}> 
             <img src={data.img} height='250px' width='250px'/>
                <dl>
                <dt>
                <h5>Name: {data.Firstame + " " + data.Lastname}</h5>
                 </dt>
                 <dt><h5>Email: {data.Email}</h5>
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
                    textAlign: 'right'
                }}><button style={{
                    marginRight:"10px"
                }} onClick={updateProfile}>Jackson</button> 
                 <span><button onClick={updateProfile}> Lesley</button></span>
                 </div>
            </div>
    );
};
export default Profile;