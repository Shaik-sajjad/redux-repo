import React,{useEffect} from 'react'
import {fetchUsers} from '../redux'
import {connect} from 'react-redux'

function UserContainer({ userData,fetchUsers }) {
    useEffect(() => {
      fetchUsers()
    },[])
    return userData.loading?(<h2>loading pls wait</h2>):userData.error?(<h2>{userData.error}</h2>):(
        <div>
         <h2>user list</h2>
          <div>{
              userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
          }
          </div>
        </div>
    )
}
const mapStateToprops = state =>{
    return {
        userData:state.user
    }
}
const MapDispatchToProps = dispatch =>{
    return{
        fetchUsers:() => dispatch(fetchUsers())
    }
}

export default connect(mapStateToprops,MapDispatchToProps)(UserContainer)
