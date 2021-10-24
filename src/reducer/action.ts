import { Cart } from "./cartReducer"

export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART';
export const REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART';

const addCart = (cart: Cart) => {
    return {
        type: ADD_PRODUCT_CART,
        payload: cart
    }
}

const removeCart = (cartId: number) => {
    return {
        type: REMOVE_PRODUCT_CART,
        payload: cartId
    }
}

const actionCart = {
    addCart,
    removeCart
}

export default actionCart