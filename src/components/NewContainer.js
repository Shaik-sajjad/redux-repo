import React,{useState} from 'react'
import {buyCake} from '../redux/index'
import {connect} from 'react-redux'
function NewContainer(props) {
    const [number,setNumber]=useState(1)
    return (
        <div>
            <h1>no of cakes {props.noOfCakes}</h1>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() =>props.buyCake(number)}>buy {number } cake</button>
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
        buyCake:number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToprops,MapDispatchToProps)(NewContainer)
