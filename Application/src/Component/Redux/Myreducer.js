var initialState={
    info:'No data',
    users:[],
};
function Reducer(state=initialState, action){
    switch(action.type){
        case 'Name':
            state={
            ...state, 
            info: action.payLoad    
            }
            break;
            case 'USERS':
                state={
                    ...state,
                users: action.payload
                };
                break;
    }
return state
};
export default Reducer;