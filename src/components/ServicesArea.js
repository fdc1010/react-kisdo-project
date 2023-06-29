import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Services1 from './img/bg/an-img-01.png';
import Services2 from './img/bg/an-img-02.png';

import Icon1 from './img/icon/f-icon1.png';
import Icon2 from './img/icon/f-icon2.png';
import Icon3 from './img/icon/f-icon3.png';

import Serv1 from './img/bg/sr-img01.png';
import Serv2 from './img/bg/sr-img02.png';
import Serv3 from './img/bg/sr-img03.png';

class ServicesArea extends Component {
    render() {
        return (
            <div id="services" className="services-area services-bg pt-120 pb-90 p-relative">
                <div className="animations-01"><img src={Services1} alt="an-img-01"/></div>
                <div className="animations-02"><img src={Services2} alt="contact-bg-an-01"/></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="section-title text-center mb-35">
                                <h5>Our Services</h5>
                                <h2>What We Provide</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="s-single-services  text-center">
                                <img src={Serv1} alt="" />
                                <div className="services-hover">
                                    <div className="services-icon">
                                       <img src={Icon1} alt=""/>
                                    </div>
                                    <div className="second-services-content">
                                        <h5>Daycare Service</h5>
                                        <p>Get Your Best Care eu lacinia magna. Nullam vehicula accumsan neque, eget congue tellus cursus quis.</p>
                                        <Link to="/services">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="s-single-services text-center">
                                <img src={Serv2} alt="feature"/>
                                <div className="services-hover">
                                    <div className="services-icon">
                                       <img src={Icon2} alt=""/>
                                    </div>
                                    <div className="second-services-content">
                                        <h5>Summer Camp</h5>
                                        <p>Get Your Best Care eu lacinia magna. Nullam vehicula accumsan neque, eget congue tellus cursus quis.</p>
                                        <Link to="/services">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="s-single-services text-center">
                                <img src={Serv3} alt="feature"/>
                                <div className="services-hover">
                                    <div className="services-icon">
                                       <img src={Icon3} alt=""/>
                                    </div>
                                    <div className="second-services-content">
                                        <h5>Online Classes</h5>
                                        <p>Get Your Best Care eu lacinia magna. Nullam vehicula accumsan neque, eget congue tellus cursus quis.</p>
                                        <Link to="/services">Read More</Link>
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

export default ServicesArea;