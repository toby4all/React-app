import { useSelector } from "react-redux";
function ReceiverComp(){
   const data= useSelector((storeData)=>{
        return storeData
    })
    return(<div style={{
        padding:'20px 100px'
    }}>
        <h2>
            Text component
        </h2>
        <p>{data.nameReducer.info}</p>
        <p>{data.cityR.city}</p>
    </div>)

};
export default ReceiverComp