/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './BsNavbar.css'

const BsNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        {/* <a className="brand navbar-brand" href="#">Navbar</a> */}

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/Create">Create</NavLink>
          <NavLink className="nav-link" to="/Notes">Notes</NavLink>
          {/* <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Create">Create</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Notes">Notes</NavLink>
            </li>
          </ul> */}
        </div>

      </nav>
    </div>
  )
}

export default BsNavbar