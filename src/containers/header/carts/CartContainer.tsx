import React, { FC } from "react"
import { useDispatch } from 'react-redux'
import btnDelete from "../../../assets/images/icon-delete.svg"

import { Cart } from "../../../reducer/cartReducer"
import action from "../../../reducer/action"

type Props = {
    isOpenCart: boolean,
    carts: Cart[]
}

const CartContainer: FC<Props> = ({ isOpenCart, carts }) => {
    const dispatch = useDispatch()

    const removeCart = (cartId: number) => {
        dispatch(action.removeCart(cartId))
    }
    return (
        <div className={isOpenCart ? "cart-container" : "display-none"}>
            <p className="title">Cart</p>
            {carts.length > 0 ?
                carts.map((cart) => (
                    <div className="content-cart">
                        <div className="cart-item">
                            <div className="d-flex align-items-center">
                                <img src={cart?.image} alt="product" className="image-product" />
                                <div className="product-info">
                                    <span className="product-name">{cart?.product_name}</span>
                                    <br />
                                    <span className="price">${cart?.price}.00 x {cart?.quantity}</span> <span className="total-price">${cart?.price * cart?.quantity}.00</span>
                                </div>
                            </div>
                            <img onClick={() => removeCart(cart.id)} src={btnDelete} alt="product" className="btn-delete" />
                        </div>
                        <div className="btn-checkout">
                            Checkout
                        </div>
                    </div>
                ))
                : <div className="no-cart">Your cart is empty</div>
            }
        </div>
    )
}

export default CartContainer