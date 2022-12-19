

function UserAction(info, dispatch){
    dispatch({
        type:'USERS',
        payload:info
    })

};
export default UserAction;