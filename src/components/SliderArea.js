import React, { Component } from 'react';

import SliderMain from './img/slider/main.png';
import SliderImg1 from './img/bg/slider_shape01.png';
import SliderImg2 from './img/bg/slider_shape02.png';
import SliderImg3 from './img/bg/slider_shape03.png';

class SliderArea extends Component {
    render() {
        return (
            <div id="parallax" className="slider-area slider-four fix p-relative">
                <div className="slider-shape ss-one layer" data-depth="0.10"><img src={SliderImg1} alt="shape"/></div>
                <div className="slider-shape ss-two layer" data-depth="0.30"><img src={SliderImg2} alt="shape"/></div>
                <div className="slider-shape ss-three layer" data-depth="0.40"><img src={SliderImg3} alt="shape"/></div>

                <div className="slider-active">
				    <div className="single-slider slider-bg d-flex align-items-center">
                    <div className="img-main" data-animation="fadeInLeft" data-delay=".2s"> <img src={SliderMain} alt="slider-overlay"/></div>
                        <div className="container">
                           <div className="row justify-content-center align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="slider-content s-slider-content pt-100">
                                        <h5 data-animation="fadeInUp" data-delay=".4s">Welcome To Childcare Service</h5>
                                         <h2 data-animation="fadeInUp" data-delay=".4s">Get Lifecare For Your kids</h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">Quisque eget tortor posuere, aliquet arcu ut, molestie nunc. Integer malesuada laoreet erat, ut hendrerit magna finibus ut.</p>
                                        
                                         <div className="slider-btn mt-30">                                          
                                            <a href="about.html" className="btn mr-15" data-animation="fadeInUp" data-delay=".4s">Explore More</a>                                             
                                        </div>        
                                                              
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderArea;