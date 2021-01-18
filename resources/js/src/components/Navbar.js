import React, { Fragment } from 'react'
import './Navbar.scss'
import NavbarItems from './NavbarItems'


const Navbar = (props) => {


    return (
        <Fragment>
            <div className = "col-3 pr-0">
                <div className="nav flex-column nav-pills bg-dark" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <br />
                    <h3 className= "ml-2">Project Management</h3>
                    <br />
                    <NavbarItems name = "Dashboard" to = "/"/>
                    <NavbarItems name = "Tickets" to = "/tickets"/>
                    <NavbarItems name = "Progress" to = "/progress"/>
                    <NavbarItems name = "Settings" to = "settings"/>
                </div>
            </div>

        </Fragment>

    )
}

export default Navbar;

