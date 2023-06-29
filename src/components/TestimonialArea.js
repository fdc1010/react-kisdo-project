import React, { Component } from 'react';

import TestiAnim1 from './img/bg/an-img-06.png';
import TestiAnim2 from './img/bg/an-img-04.png';
import TestiImg1 from './img/bg/testmonail-img.png';

class TestimonialArea extends Component {
    render() {
        return (
            <div className="testimonial-area pt-120 pb-150 fix p-relative" style={{background: "#f7f9ff"}}>
                <div className="animations-01"><img src={TestiAnim1} alt="an-img-01"/></div>
                <div className="animations-02"><img src={TestiAnim2} alt="contact-bg-an-01"/></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"> 
                            <img src={TestiImg1}alt="img"/>
                         </div>
                         <div className="col-lg-6">
                            <div className="section-title center-align mb-35">
                                <h5>Testimonial</h5>                            
                                <h2>What Our Clients Says</h2>
                            </div>
                            <div className="testimonial-active">
                                <div className="single-testimonial">                                    
                                    <p>“Quisque eget tortor posuere, aliquet arcu ut, molestie nunc. Integer malesuada laoreet erat, ut hendrerit magna finibus ut. Duis vitae enim bibendum, gravida sapien vitae, egestas velit. Sed euismod tristique orci. Phasellus placerat, metus fermentum tincidunt condimentum, felis dolor dapibus metus”.</p>
                                     <div className="testi-author">                                       
                                        <div className="ta-info">
                                            <h6>Walkar James</h6>
                                            <span>Kid Parent</span>
                                        </div>
                                    </div>
                                   
                                </div>
                               <div className="single-testimonial">                                    
                                    <p>“Quisque eget tortor posuere, aliquet arcu ut, molestie nunc. Integer malesuada laoreet erat, ut hendrerit magna finibus ut. Duis vitae enim bibendum, gravida sapien vitae, egestas velit. Sed euismod tristique orci. Phasellus placerat, metus fermentum tincidunt condimentum, felis dolor dapibus metus”.</p>
                                     <div className="testi-author">                                       
                                        <div className="ta-info">
                                            <h6>Walkar James</h6>
                                            <span>Kid Parent</span>
                                        </div>
                                    </div>
                                   
                                </div>
                              <div className="single-testimonial">                                    
                                    <p>“Quisque eget tortor posuere, aliquet arcu ut, molestie nunc. Integer malesuada laoreet erat, ut hendrerit magna finibus ut. Duis vitae enim bibendum, gravida sapien vitae, egestas velit. Sed euismod tristique orci. Phasellus placerat, metus fermentum tincidunt condimentum, felis dolor dapibus metus”.</p>
                                     <div className="testi-author">                                       
                                        <div className="ta-info">
                                            <h6>Walkar James</h6>
                                            <span>Kid Parent</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestimonialArea;