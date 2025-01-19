
import React, { useEffect, useState } from "react"


import NavBar from "../Navbar";
import Header from "../Header";
import DomHead from "../Head";

import { ResponsiveNavbar } from "../Navbar"


function Layout({ children }) {

    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth])

    return (
        <div className={`w-screen h-screen`}>
            <DomHead />
            <Header>
                <NavBar />
            </Header>
            {children}
            {windowWidth <= 700 && <ResponsiveNavbar />}

        </div>
    )
}

export default Layout

