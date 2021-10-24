import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART } from './action'

export type Cart = {
    id: number,
    product_name: string,
    image: string,
    price: number,
    quantity: number,
    discount: number
}

const INITIAL_STATE: Cart[] = []
const cartsReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            const data = action.payload
            return addCart(state, data)
        case REMOVE_PRODUCT_CART:
            const cartId = action.payload
            return removeCart(state, cartId)
        default:
            return state
    }
}

const addCart = (state: Cart[], payload: Cart) => {
    var index = state.findIndex((cart) => cart.id === payload.id)
    var result: Cart[] = []
    if (index >= 0) {
        result = [
            ...state.slice(0, index - 1),
            {
                ...state[index],
                quantity: state[index].quantity + payload.quantity
            },
            ...state.slice(index + 1)
        ]
    }
    else {
        result = [
            ...state,
            payload
        ]
    }

    return result
}

const removeCart = (state: Cart[], cartId: number) => {
    var result: Cart[] = state.filter((cart) => cart.id !== cartId)
    return [...result]
}

export default cartsReducer