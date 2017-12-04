import {LIST, AUTOCOMPLETE, GET} from '../actions/products/types'
import _ from 'lodash'
const initState = {
    items:[],
    item:{},
    autocomplete:[],
}
const product=(state={}, action)=>{
    switch (action.type) {
        case GET:
            return _.find(state.items, {"_id":action._id})
        default:
            return state
    }
}
const products = (state = initState, action)=> {
    switch (action.type) {
        case LIST:
            return Object.assign({}, state, {items:action.items})
        case GET:
            return Object.assign({}, state, {item:product(state, action)})
        case AUTOCOMPLETE:
            return Object.assign({}, state, {autocomplete:action.autocomplete})
        default:
            return state
    }
}
export default products