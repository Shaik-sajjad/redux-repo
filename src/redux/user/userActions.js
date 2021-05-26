import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './userTypes'
import axios from 'axios'
const fetchuserrequest = () =>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
const fetchuserssuccess = users =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
const fetchusersfailure = error => {
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchuserrequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users=response.data
            dispatch(fetchuserssuccess(users))
        })
        .catch(error => {
            const errormsg=error.message
            dispatch(fetchusersfailure(errormsg))
        })

    }
}