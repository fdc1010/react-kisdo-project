import React, { Component } from 'react';

import ContAnim1 from './img/bg/slider_shape03.png';
import ContAnim2 from './img/bg/an-img-12.png';
import ContAnim3 from './img/bg/slider_shape02.png';
import ContAnim4 from './img/bg/an-img-13.png';

import ContactImg1 from './img/bg/contact-img.png';

class ContactArea extends Component {
    render() {
        return (
            <div id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix" style={{background: "#f8f9fe"}}>
                <div className="animations-12"><img src={ContAnim1} alt="an-img-01"/></div>
                <div className="animations-13"><img src={ContAnim2} alt="contact-bg-an-01"/></div>
                <div className="animations-14"><img src={ContAnim3} alt="contact-bg-an-01"/></div>
                <div className="animations-15"><img src={ContAnim4} alt="contact-bg-an-01"/></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-1">
                            <img src={ContactImg1} alt="img"/>							
                        </div>
                        <div className="col-lg-6 order-2">
                            <div className="contact-bg02 wow fadeInLeft  animated">
                                <div className="section-title center-align">
                                    <h5>Contact Us</h5>
                                    <h2>Join Our Best Fun Classes</h2>
                                </div>
                                <form action="mail.php" method="post" class="contact-form mt-35">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-name mb-30">                                    
                                                <input type="text" id="firstn" name="firstn" placeholder="Full Name" required/>
                                            </div>                               
                                        </div>
                                        <div className="col-lg-12">                               
                                            <div className="contact-field p-relative c-subject mb-30">                                   
                                                <input type="text" id="email" name="email" placeholder="Eamil Address" required/>
                                            </div>
                                        </div>		
                                        <div className="col-lg-12">                               
                                            <div className="contact-field p-relative c-subject mb-30">                                   
                                                <input type="text" id="phone" name="phone" placeholder="Phone No." required/>
                                            </div>
                                        </div>	
                                        <div className="col-lg-12">
                                            <div className="contact-field p-relative c-message mb-30">                                  
                                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Write comments"></textarea>
                                            </div>
                                            <div className="slider-btn">                                          
                                                <button className="btn ss-btn active" data-animation="fadeInRight" data-delay=".8s">Submint Now</button>				
                                            </div>                             
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactArea;