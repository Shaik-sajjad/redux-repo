import {BUY_ICE} from './iceTypes'

const initialState = {
    noOfice :40
}

const iceReducer = (state = initialState,action) =>{
    switch (action.type) {
        case BUY_ICE:
         return{
             ...state,
             noOfice:state.noOfice-1
         }
    
        default:return state
    }
}
export default iceReducer