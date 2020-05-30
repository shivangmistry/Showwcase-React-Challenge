import { GET_USER, SET_USER } from '../actionType/actionTypes'

export const setUser = (username: string): Object => {
    return {
        type: SET_USER,
        payload: {
            username: username
        }
    }
}

export const getUser = (): Object => {
    return {
        type: GET_USER
    }
}