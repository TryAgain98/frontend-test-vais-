import { combineReducers } from 'redux'
import cartsReducer from '../reducer/cartReducer'

const rootReducer = combineReducers({
    carts: cartsReducer,
})

export default rootReducer