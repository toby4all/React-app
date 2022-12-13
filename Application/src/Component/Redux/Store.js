import { createStore, applyMiddleware } from "redux";
import Reducer from "./Myreducer";
import logger from "redux-logger";

 const myStore =   createStore(Reducer,applyMiddleware(logger));
 export default myStore;