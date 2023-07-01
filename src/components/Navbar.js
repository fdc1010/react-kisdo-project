import React from "react"
import NavLink from "./NavLink"

export default function Navbar() {
  return (
    <>
      <div className="col-xl-7 col-lg-7">
        <div className="main-menu text-right text-xl-right">
          <nav id="mobile-menu">
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/aboutus">About Us</NavLink>
              <NavLink to="/classes">Classes</NavLink>
              <NavLink to="/teachers">Teachers</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contactus">Contact Us</NavLink>
            </ul>
          </nav>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-30 mb-30 text-right text-xl-right">
        <div className="login">
          <ul>
            <li>
              <span className="header-btn second-header-btn">
                <a href="/contactus" className="btn">
                  Get Started
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-12">
        <div className="mobile-menu"></div>
      </div>
    </>
  )
}
