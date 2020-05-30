import { GET_USER, SET_USER } from '../actionType/actionTypes'

const initialState: any = {
    username: ''
}

const userReducer = (state: any = initialState, action: any): any => {
    switch(action.type){
        case GET_USER:
            return {
                ...state
            }
        case SET_USER:
            const username = action.payload.username;
            console.log('Checking for user: ', action.payload.username);
            if(state.username) {
                console.log('User exists');
            } else {
                console.log('User does not exists');
            }
            return {
                ...state,
                username: username
            }
        default:
            return state;
    }
}

export default userReducer