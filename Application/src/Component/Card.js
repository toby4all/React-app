import logo2 from './logo2.svg'
import Counter from './counter';
function CreateCard(props){
    var cardstyle= {
        width: "250px",
        textAlign: "center",
        padding : "20px",
        margin: "50px auto",
        boxShadow: "0 0 10px black"
    }
    return(
         <div style={cardstyle}>
            <img src={props.img} height="300px" width="100%"/>
            <h4>{props.name}</h4>
            <p>{props.gender}</p>
            <img style={{
                fontWeight:"bolder",
            }}src={logo2} alt='logo'/>
            <span src={props.ratings}></span>
            <div>
         <Counter/>
            </div>
        </div>
    );

};
export default CreateCard;