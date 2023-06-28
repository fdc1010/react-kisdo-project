import React, { Component } from 'react';
import FooterLogo from './img/logo/f_logo.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-bg footer-p">
                <div className="footer-top pt-120 pb-80  p-relative footer-image-bg">
                    <div className="container">
                        <div class="row justify-content-between">
                        
                          <div class="col-xl-3 col-lg-3 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title mb-15">
                                   <img src={FooterLogo} alt="img"/>
                                </div>
                                <div class="footer-text mb-20">
                                    <p>In interdum, mauris in sollicitudin consectetur, elit odio tempus mauris, eget convallis metus arcu nec diam. Vestibulum sagittis at lectus et.</p>
                                </div>
                                <div class="footer-social">                                    
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                </div>        
                            </div>
                        </div>
						<div class="col-xl-2 col-lg-2 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Our Links</h2>
                                </div>
                                <div class="footer-link">
                                    <ul>                                        
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html"> About Us</a></li>
                                        <li><a href="classes.html">  Classes</a></li>
                                        <li><a href="contact.html"> Contact Us</a></li>
                                        <li><a href="blog.html">Blog </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title">
                                    <h2>Contact Us</h2>
                                </div>
                                <div class="f-contact">
                                    <ul>
                                    <li>
                                        <i class="icon fal fa-map-marker-check"></i>
                                        <span>1247/Plot No. 39, 15th Phase, <br/>Colony, Hyderabad</span>
                                    </li>
                                    <li>
                                        <i class="icon fal fa-phone"></i>
                                        <span>1800-121-3637<br/>+91-7052-101-786</span>
                                    </li>
                                   <li><i class="icon fal fa-envelope"></i>
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
                        <div class="col-xl-3 col-lg-3 col-sm-6">
                            <div class="footer-widget mb-30">
                                <div class="f-widget-title mb-15">
                                  <h2>Subscribe Now !</h2>
                                </div>
                               <div class="footer-link">
                                <div class="newslater-area">
                                    <form name="ajax-form" id="contact-form4" action="#" method="post" class="contact-form newslater">
                                       <div class="form-group p-relative">
                                          <input class="form-control" id="email2" name="email" type="email" placeholder="Email Address..." value="" required=""/> 
                                          <button type="submit"  id="send2"><i class="far fa-chevron-right"></i></button>
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