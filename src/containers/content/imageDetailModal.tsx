/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { FC, useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';

import iconNext from "../../assets/images/icon-next.svg"
import iconPrevious from "../../assets/images/icon-previous.svg"
import iconClose from "../../assets/images/icon-close.svg"

type Props = {
    isOpen: boolean,
    toggle: () => void
    curentProductImage: string
    productImgList: string[]
}

const ImageDetailModal: FC<Props> = ({ isOpen, toggle, curentProductImage, productImgList }) => {
    const [currentImage, setCurrentImage] = useState<string>()

    useEffect(() => {
        setCurrentImage(curentProductImage)
    }, [curentProductImage])

    const priviousImage = () => {
        var index = productImgList.findIndex((srcImage) => srcImage === currentImage)
        if (index > 0) {
            setCurrentImage(productImgList[index - 1])
        }
    }

    const nextImage = () => {
        var index = productImgList.findIndex((srcImage) => srcImage === currentImage)
        if (index >= 0 && index !== productImgList.length - 1) {
            setCurrentImage(productImgList[index + 1])
        }
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} modalClassName="image-detail-modal">
            <ModalBody className="body">
                <div className="primary-image-container">
                    <div className="icon-close" onClick={toggle}><img src={iconClose} alt="close"></img></div>
                    <div className="previous-image" onClick={() => priviousImage()}><img src={iconPrevious} alt="previous"></img></div>
                    <img className="product-image" src={currentImage} alt="product"></img>
                    <div className="next-image" onClick={() => nextImage()}><img src={iconNext} alt="next"></img></div>
                </div>
                <br />
                <div className="d-flex justify-content-around image-list-container">
                    {
                        !!productImgList && productImgList.map((srcImage, index) => (
                            <div key={index} className= "detail-image-container">
                                <div className={currentImage === srcImage ? "detail-image--active" : "detail-image--no-active"}></div>
                                <img onClick={() => { setCurrentImage(srcImage) }} alt="product" src={srcImage}
                                    className={`image-item`} />
                            </div>
                        ))
                    }
                </div>
            </ModalBody>
        </Modal >
    );
}

export default ImageDetailModal;