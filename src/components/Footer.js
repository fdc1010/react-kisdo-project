import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FooterLogo from './img/logo/f_logo.png';

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
                                   <img src={FooterLogo} alt="img"/>
                                </div>
                                <div className="footer-text mb-20">
                                    <p>In interdum, mauris in sollicitudin consectetur, elit odio tempus mauris, eget convallis metus arcu nec diam. Vestibulum sagittis at lectus et.</p>
                                </div>
                                <div className="footer-social">                                    
                                    <Link to="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></Link>
                                    <Link to="https://twitter.com/"><i class="fab fa-twitter"></i></Link>
                                    <Link to="https://www.instagram.com/"><i class="fab fa-instagram"></i></Link>
                                    
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
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/aboutus"> About Us</Link></li>
                                        <li><Link to="/classes">Classes</Link></li>
                                        <li><Link to="/teachers">Teachers</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/contactus">Contact Us</Link></li>
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
                                        <span>1247/Plot No. 39, 15th Phase, <br/>Colony, Hyderabad</span>
                                    </li>
                                    <li>
                                        <i className="icon fal fa-phone"></i>
                                        <span>1800-121-3637<br/>+91-7052-101-786</span>
                                    </li>
                                   <li><i className="icon fal fa-envelope"></i>
                                        <span>
                                            <a href="mailto:info@example.com">info@example.com</a>
                                       <br/>
                                       <a href="mailto:help@example.com">help@example.com</a>
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
                                    <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                                       <div className="form-group p-relative">
                                          <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..." value="" required=""/> 
                                          <button type="submit"  id="send2"><i className="far fa-chevron-right"></i></button>
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
        );
    }
}

export default Footer;