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
        </div>
    );

};
export default CreateCard;