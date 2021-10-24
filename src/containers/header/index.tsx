import React from "react"
import Carts from "./carts/index"
import avatar from "../../assets/images/image-avatar.png"
import logo from "../../assets/images/logo.svg"
import MobileNavBar from "./mobileNavBar"

const Header = () => {
    return (
        <div className="header">
            <div className="left-navbar">
                <MobileNavBar />
                <img className="logo" src={logo} alt="logo" />
                <div className="navbar-item">
                    Collections
                    <div className="navbar-item-active"></div>
                </div>
                <div className="navbar-item">Men
                    <div className="navbar-item-active"></div>
                </div>
                <div className="navbar-item">Women
                    <div className="navbar-item-active"></div></div>
                <div className="navbar-item">About
                    <div className="navbar-item-active"></div></div>
                <div className="navbar-item">Contact
                    <div className="navbar-item-active"></div></div>
            </div>
            <div className="right-navbar">
                <Carts />
                <div className="avatar">
                    <div className="border-avatar">
                        <img src={avatar} className="img-avatar" alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header