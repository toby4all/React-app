// import React from "react";

const CityAction=(cityName, dispatch)=>{
    dispatch({
        type:'City',
        city:cityName
    })

}
export default CityAction;