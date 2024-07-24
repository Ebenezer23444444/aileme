import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
    const LINKS = [
        { id: 1, url: "Home", path: "/" },
        { id: 2, url: "About", path: "About" },
        { id: 3, url: "Contact", path: "Contact" },
        { id: 4, url: "Register", path: "Register" },

    ]
    return (
        <div>
            {LINKS.map((Link) => {
                return (
                    <>
                        <div key={Link.id}>
                            <li> <NavLink to={Link.path}>{Link.url}</NavLink> </li>

                        </div>
                    </>
                )
            }
            )}
            <Outlet/>
        </div>
    )
}

export default Layout
