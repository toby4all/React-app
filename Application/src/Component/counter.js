import { useState } from "react";
import thumb from './thumb.svg';

var Counter= (props)=>{
    let[count, setCount]= useState(0)

    function updateCountvalue(){
        setCount(count + 1)
    };

    var divstyle= {
        border:"1px solid black",
        color: 'black',
        padding: '5px',
        margin:'0px auto',
        display: 'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
    };

    return(
    <div>
        <p style={{
        textAlign:"left",
        color:'blue'
     }}>
        <img style={{
            Color:'blue',
        }} src={thumb} alt='thumb'/>{count}
        </p>
        <div style={divstyle} >
             <button
             style={ 
                 {  width:'60px',
                    backgroundColor:'white',
                    border:"none",
                    display:'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }
             } onClick={updateCountvalue}>
             <img src={thumb} alt='thumb'/>
             <h3>like</h3>
             </button>
             <h4>comment</h4>
             <h4>share</h4>
             </div>
        </div>
    )

};
export default Counter;