import React from 'react'
import './HorizontalNavbar.scss'
export default function HorizontalNavbar() {
    return (
    <div className = "col-9 pl-0">
    <nav className="navbar bg-light navbar-light border-bottom">
    <form className="d-inline my-2 my-lg-0 ml-3 nav-input">
      <input className="nav-form" type="search" placeholder="Project" aria-label="Project" />
      <button className="btn btn-outline-dark pt-1 my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div>
    <button className="btn btn-primary rounded-pill new_messages m-2" type="button">
        Notifications <span className="badge badge-secondary rounded-pill">4</span>
    </button>
    <button className="btn btn-dark m-2 rounded-pill" type="button">
        Login
    </button>
    </div>

    </nav>
    </div>
    )
}
