import React, { useState } from "react"
import { useSelector } from 'react-redux'

import logo from '../../../assets/images/icon-cart.svg'
import CartContainer from "./CartContainer"

import { Cart } from "../../../reducer/cartReducer"

const Carts = () => {
    const carts: Cart[] = useSelector((state: any) => state.carts)

    const [isOpenCart, setIsOpenCart] = useState<boolean>(false)
    return (
        <div className="carts">
            <div onClick={() => setIsOpenCart(!isOpenCart)} className="cart--top">
                <img src={logo} alt="cart" className={`icon-cart ${isOpenCart ? "icon-cart--active" : ""}`} />
                {carts.length > 0 && <span className="cart-quantity"> {carts.length} </span>}
            </div>
            <CartContainer isOpenCart={isOpenCart} carts={carts} />
        </div>
    )
}

export default Carts