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
            // return { 
            //     ...state,
            //     [action.payload.username]: [...state[action.payload.username], action.payload.institute]
            // };
            return {
                ...state,
                [action.payload.username]: [...state[action.payload.username], action.payload.institute].sort(function(a, b){
                    if(a.startYear>=b.endYear && a.endYear>=b.endYear) return -1
                    return 1
                })
            }
        default:
            return state;
    }
}

export default reducer;