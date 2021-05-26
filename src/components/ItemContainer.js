import React from 'react'
import {connect} from 'react-redux'
import { buyCake,buyIce} from '../redux/index'

function ItemContainer(props) {
    return (
        <div>
            <h2> item {props.item} </h2>
            <button onClick={props.buyitem}>buy items</button>
        </div>
    )
}
const mapStateToprops = (state,ownProps)=>{
    const itemcontainer =ownProps.cake?state.cake.noOfCakes:state.ice.noOfice
    return{
        item:itemcontainer
    }
}
const MapDispatchToProps = (dispatch,ownProps)=> {
    const dispatchfun = ownProps.cake? () => dispatch(buyCake()):  () => dispatch(buyIce())
    return {
        buyitem:dispatchfun

    }

}

export default connect(mapStateToprops,MapDispatchToProps)(ItemContainer)
