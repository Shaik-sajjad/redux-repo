import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake }from '../redux/index'
    
    
function HooksCakeContainer() {
    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch=  useDispatch()
    return (
        <div>
            <h1>no of cakes{noOfCakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
