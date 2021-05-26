import React from 'react'
import {buyCake} from '../redux/index'
import {connect} from 'react-redux'
function CakeContainer(props) {
    return (
        <div>
            <h1>no of cakes {props.noOfCakes}</h1>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    )
}
const mapStateToprops =state =>{
    return{
        noOfCakes:state.cake.noOfCakes
    }
}
const MapDispatchToProps = dispatch =>{
    return{
        buyCake:() => dispatch(buyCake())
    }
}

export default connect(mapStateToprops,MapDispatchToProps)(CakeContainer)
