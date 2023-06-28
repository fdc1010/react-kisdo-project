import React, { Component } from 'react';
import AbtImg1 from './img/bg/an-img-03.png';
import AbtImg2 from './img/bg/an-img-04.png';
import AbtImg3 from './img/bg/an-img-05.png';
import AbtImg4 from './img/features/about_img.png';

class AboutArea extends Component {
    render() {
        return (
            <div className="about-area about-p pt-120 pb-195 p-relative" style={{background: "#f7f9ff"}}>
                <div className="animations-03"><img src={AbtImg1} alt="an-img-01"/></div>
                <div className="animations-04"><img src={AbtImg2} alt="contact-bg-an-01"/></div>
                <div className="animations-05"><img src={AbtImg3} alt="contact-bg-an-01"/></div>

                <div className="container">
                    <div className="row justify-content-center align-items-center">
                         <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="s-about-img p-relative  wow fadeInLeft  animated"   data-animation="fadeInLeft" data-delay=".4s">
                                <img src={AbtImg4} alt="img"/>    
                            </div>
                          
                        </div>  
					<div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-content s-about-content  wow fadeInRight  animated pl-30" data-animation="fadeInRight" data-delay=".4s">
                                <div className="about-title second-title pb-25">  
                                    <h5>About Us</h5>
                                    <h2>Get Special Care For Your Kids</h2>                                   
                                </div>
                                    <p>Nunc mattis justo eget ex bibendum eleifend. Sed finibus neque nec dui vehicula sollicitudin. Nam at velit vel enim placerat fringilla at sit amet justo. Nullam nec risus placerat, sagittis odio eget, volutpat ante.</p>
                                    <p>Vivamus convallis sed felis sed tincidunt. Sed nec arcu vel lectus molestie efficitur. Praesent viverra ipsum sagittis tellus facilisis malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                                    <div className="slider-btn mt-15">                                          
                                        <a href="about.html" className="btn">Explore More</a>					
                                    </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutArea;