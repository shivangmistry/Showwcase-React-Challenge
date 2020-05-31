import { SET_USER, ADD_EDUCATION } from '../actionType/actionTypes'

export const setUser = (username: string): Object => {
    return {
        type: SET_USER,
        payload: {
            username: username
        }
    }
}

export const addEducation = (username: string, institute: any): Object => {
    return {
        type: ADD_EDUCATION,
        payload: {
            username: username,
            institute: institute
        }
    }
}