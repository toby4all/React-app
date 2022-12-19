import { createStore, applyMiddleware, combineReducers } from "redux";
import Reducer from "./Myreducer";
import cityReducer from "./CityReducer";
import logger from "redux-logger";


 const cr= combineReducers({nameReducer:Reducer,
     cityR:cityReducer, });

 const myStore =   createStore(cr,applyMiddleware(logger));
 export default myStore;