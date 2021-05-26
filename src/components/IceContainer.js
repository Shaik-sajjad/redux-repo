import React from 'react'
import {buyIce} from '../redux/index'
import {connect} from 'react-redux'
function IceContainer(props) {
    return (
        <div>
            <h1>no of icecreams {props.noOfice}</h1>
            <button onClick={props.buyIce}>buy cake</button>
        </div>
    )
}
const mapStateToprops =state =>{
    return{
        noOfice:state.ice.noOfice
    }
}
const MapDispatchToProps = dispatch =>{
    return{
        buyIce:() => dispatch(buyIce())
    }
}

export default connect(mapStateToprops,MapDispatchToProps)(IceContainer)
