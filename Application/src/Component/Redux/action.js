import myStore from "./Store";

const myAction= (ComponentData)=>{
    myStore.dispatch({
        type:'Name', 
        payLoad:ComponentData
    });

};
export default myAction;