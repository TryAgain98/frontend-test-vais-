import React, { useState } from "react"
import { Row, Col, Input } from 'reactstrap';
import { useDispatch } from 'react-redux'

import imageProduct1 from "../../assets/images/image-product-1.jpg"
import imageProduct2 from "../../assets/images/image-product-2.jpg"
import imageProduct3 from "../../assets/images/image-product-3.jpg"
import imageProduct4 from "../../assets/images/image-product-4.jpg"

import minus from "../../assets/images/icon-minus.svg"
import plus from "../../assets/images/icon-plus.svg"
import cart from "../../assets/images/icon-cart.svg"

import ImageDetailModal from "./imageDetailModal"
import { Cart } from "../../reducer/cartReducer"
import action from "../../reducer/action"
import iconNext from "../../assets/images/icon-next.svg"
import iconPrevious from "../../assets/images/icon-previous.svg"

export type Product = {
    id: number,
    product_name: string,
    company_name: string,
    description: string,
    images: string[],
    price: number,
    discount: number
}

const default_product: Product = {
    id: 1,
    product_name: "Fall Limited Edition Sneakers",
    company_name: "SNEAKER COMPANY",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer",
    price: 250,
    discount: 50,
    images: [imageProduct1, imageProduct2, imageProduct3, imageProduct4]
}

const Content = () => {
    const dispatch = useDispatch()

    const [product] = useState<Product>(default_product)
    const [isOpenImgDetailModal, setIsOpenImgDetailModal] = useState<boolean>(false)
    const [curentProductImage, setCurentProductImage] = useState<string>(product.images[0])

    const [productQuantity, setProductQuantity] = useState<number>(0)

    const minusProduct = () => {
        if (productQuantity > 0) {
            setProductQuantity(productQuantity - 1)
        }
    }

    const plusProduct = () => {
        setProductQuantity(productQuantity + 1)
    }

    const AddToCart = () => {
        if (productQuantity <= 0) return
        const newCart: Cart = {
            id: product.id,
            product_name: product.product_name,
            image: product.images.length > 0 ? product.images[0] : "",
            price: product.price * (product.discount / 100),
            quantity: productQuantity,
            discount: product.discount
        }
        dispatch(action.addCart(newCart))
    }

    const priviousImage = () => {
        var index = product.images.findIndex((srcImage) => srcImage === curentProductImage)
        if (index > 0) {
            setCurentProductImage(product.images[index - 1])
        }
    }

    const nextImage = () => {
        var index = product.images.findIndex((srcImage) => srcImage === curentProductImage)
        if (index >= 0 && index !== product.images.length - 1) {
            setCurentProductImage(product.images[index + 1])
        }
    }

    return (
        <Row className="content">
            <Col sm={12} md={6} className="left-content">
                <div className="primary-image-container__mobile">
                    <div className="previous-image" onClick={() => priviousImage()}><img src={iconPrevious} alt="previous"></img></div>
                    <img src={curentProductImage} alt="product" className="primary-image-product" />
                    <div className="next-image" onClick={() => nextImage()}><img alt="next" src={iconNext}></img></div>
                </div>
                <div className="primary-image-container">
                    <img src={curentProductImage} alt="product" onClick={() => { setIsOpenImgDetailModal(true) }} className="primary-image-product" />
                    <br />
                    <div className="detail-image-container">
                        {
                            !!product && product.images.map((srcImage, index) => (
                                <div key={index} className={`detail-image ${curentProductImage === srcImage ? "detail-image-active" : ""}`}>
                                    <img onClick={() => {
                                        setCurentProductImage(srcImage)
                                    }} src={srcImage} alt="product"
                                        className={`detail-image-product ${curentProductImage === srcImage ? "product-image-active" : ""}`} />

                                </div>
                            ))
                        }
                    </div>
                </div>
            </Col>
            <Col sm={12} md={6} className="right-content">
                <p className="sneaker-company">{product.company_name}</p>
                <p className="title">{product.product_name}</p>
                <p className="description">{product.description}
                </p>
                <div className="price-container">
                    <div className="d-flex align-items-center">
                        <span className="discount-price">${product.price * (product.discount / 100)}.00 </span>
                        <span className="percent-discount"> {product.discount}% </span>
                    </div>
                    <p className="current-price">${product.price}.00</p>
                </div>
                <div className="add-product-container">
                    <div className="product-quantity">
                        <div className="minus" onClick={minusProduct}><img src={minus} alt="minus"></img></div>
                        <Input className="quantity" onChange={(e) => {
                            const re = /^[0-9\b]+$/;
                            if (e.target.value === '' || re.test(e.target.value)) {
                                setProductQuantity(Number(e.target.value))
                            }
                        }} value={productQuantity} />
                        <div className="plus" onClick={plusProduct}><img src={plus} alt="plus"></img></div>
                    </div>
                    <div className="btn-add-product" onClick={AddToCart}>
                        <img src={cart} alt="cart"></img><span>Add to cart</span>
                    </div>
                </div>
            </Col>

            <ImageDetailModal
                isOpen={isOpenImgDetailModal}
                toggle={() => setIsOpenImgDetailModal(false)}
                curentProductImage={curentProductImage}
                productImgList={product.images}
            />

        </Row>
    )
}

export default Content