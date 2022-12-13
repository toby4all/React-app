var initialState={
    info:'No data',
};
function Reducer(state=initialState, action){
    switch(action.type){
        case 'Name':
            state={
            ...state, 
            info: action.payLoad    
            }
            break;
    }
return state
};
export default Reducer;