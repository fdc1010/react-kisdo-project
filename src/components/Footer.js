import React, { Component } from "react"
import { Link } from "react-router-dom"
import NavLink from "./NavLink"
import FooterLogo from "./img/logo/f_logo.png"

class Footer extends Component {
  render() {
    return (
      <div className="footer-bg footer-p">
        <div className="footer-top pt-120 pb-80  p-relative footer-image-bg">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title mb-15">
                    <img src={FooterLogo} alt="img" />
                  </div>
                  <div className="footer-text mb-20">
                    <p>
                      In interdum, mauris in sollicitudin consectetur, elit odio
                      tempus mauris, eget convallis metus arcu nec diam.
                      Vestibulum sagittis at lectus et.
                    </p>
                  </div>
                  <div className="footer-social">
                    <Link to="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Our Links</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/aboutus"> About Us</NavLink>
                      <NavLink to="/classes">Classes</NavLink>
                      <NavLink to="/teachers">Teachers</NavLink>
                      <NavLink to="/services">Services</NavLink>
                      <NavLink to="/contactus">Contact Us</NavLink>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Contact Us</h2>
                  </div>
                  <div className="f-contact">
                    <ul>
                      <li>
                        <i className="icon fal fa-map-marker-check"></i>
                        <span>
                          30 Gatliff Rd, London SW1W 8QN United Kingdom
                        </span>
                      </li>
                      <li>
                        <i className="icon fal fa-phone"></i>
                        <span>
                          1800-121-3637
                          <br />
                          +91-7052-101-786
                        </span>
                      </li>
                      <li>
                        <i className="icon fal fa-envelope"></i>
                        <span>
                          <Link to="/contactus">info@example.com</Link>
                          <br />
                          <Link to="/contactus">help@example.com</Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title mb-15">
                    <h2>Subscribe Now !</h2>
                  </div>
                  <div className="footer-link">
                    <div className="newslater-area">
                      <form
                        name="ajax-form"
                        id="contact-form4"
                        action="#"
                        method="post"
                        className="contact-form newslater"
                      >
                        <div className="form-group p-relative">
                          <input
                            className="form-control"
                            id="email2"
                            name="email"
                            type="email"
                            placeholder="Email Address..."
                            defaultValue=""
                            required
                          />
                          <button type="submit" id="send2">
                            <i className="far fa-chevron-right"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap text-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                Copyright © 2023 Kidso All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
