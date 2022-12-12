import React from "react";
class Imagecomp extends React.Component{
    constructor(props){
        super(props)
        this.state={ techName:'React',
        techImg: 'https://www.shutterstock.com/image-vector/react-emblem-blue-atom-on-260nw-1568210053.jpg'}
       
    }
    render(){
    return(
        <div style={{
            margin:"90px auto",
            textAlign:'center',
            padding:'20px'
        }}>
            <img src={this.state.techImg}
            width="250px" height='300px'></img><br/>
            <h3>{this.state.techName}</h3>
            <button onClick={()=>{this.setState({techName:'React',
            techImg:'https://www.shutterstock.com/image-vector/react-emblem-blue-atom-on-260nw-1568210053.jpg',
            })}}
            style={{
                marginRight:"20px"
            }}>React</button>

            <button onClick={()=>{this.setState({techName:'Angular',
            techImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVT7NYF7nBlXqQ_6zjNBbhSVlXF3-HuSCW8g&usqp=CAU'
            })}}
            >Angular</button>
        </div>
    )
    }
}
export default Imagecomp