import { SET_USER, ADD_EDUCATION } from '../actionType/actionTypes'

const initialState: any = {
    username: '',
}

export const reducer = (state: any = initialState, action: any): any => {
    switch(action.type){
        case SET_USER:
            const user = action.payload.username;
            if(user in state) {
                // user exists
                return {
                    ...state,
                    username: user
                }
            } else {
                // new user, initialize empty array for educations
                state[user] = []
                return {
                    ...state,
                    username: user,
                }
            }
        case ADD_EDUCATION:
            state[action.payload.username].push(action.payload.institute);
            return { ...state };
        default:
            return state;
    }
}

export default reducer;