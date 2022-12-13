import { useSelector } from "react-redux";
function ReceiverComp(){
   const data= useSelector((storeData)=>{
        return storeData.info
    })
    return(<div style={{
        padding:'20px 100px'
    }}>
        <h2>
            Text component
        </h2>
        <p>{data}</p>
    </div>)

};
export default ReceiverComp