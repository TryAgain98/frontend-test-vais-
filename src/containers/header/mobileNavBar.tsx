import React, { useState } from "react"
import menu from "../../assets/images/icon-menu.svg"
import close from "../../assets/images/icon-close.svg"

const MobileNavbar = () => {
    const [isOpennavBar, setIsOpenNavbar] = useState<boolean>(false)
    const navBar: string[] = ["Collections", "Men", "Women", "About", "Contact"]
    return (
        <div className="mobile-navbar-container">
            <img className="menu" src={menu} alt="menu" onClick={() => setIsOpenNavbar(!isOpennavBar)} />
            <div className={isOpennavBar ? "mobile-nav" : "mobile-nav-close"}>
                <img className="icon-close" src={close} alt="close" onClick={() => setIsOpenNavbar(!isOpennavBar)} />
                {
                    !!navBar && navBar.map((item, index) => (
                        <p key={index} className="mobile-navbar-item">
                            {item}
                        </p>
                    ))
                }
            </div>
            <div className={isOpennavBar ? "nav-bar-background" : "display-none"} onClick={() => setIsOpenNavbar(!isOpennavBar)}>

            </div>
        </div>
    )
}

export default MobileNavbar