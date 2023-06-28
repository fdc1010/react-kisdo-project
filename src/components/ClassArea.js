import React, { Component } from 'react';
import ClsAnim1 from './img/bg/an-img-06.png';
import ClsAnim2 from './img/bg/an-img-07.png';
import ClsAnim3 from './img/bg/an-img-08.png';
import ClsAnim4 from './img/bg/an-img-09.png';

import ClassImg1 from './img/class/class-1.jpg';
import ClassImg2 from './img/class/class-2.jpeg';
import ClassImg3 from './img/class/class-3.jpeg';
import ClassImg4 from './img/class/class-4.jpeg';
import ClassImg5 from './img/class/class-5.jpeg';
import ClassImg6 from './img/class/class-6.jpeg';

class ClassArea extends Component {
    render() {
        return (
            <div className="class-area pt-120 pb-120 p-relative">
                <div class="animations-06"><img src={ClsAnim1} alt="an-img-01"/></div>
                <div class="animations-07"><img src={ClsAnim2} alt="contact-bg-an-01"/></div>
                <div class="animations-08"><img src={ClsAnim3} alt="contact-bg-an-01"/></div>
                <div class="animations-09"><img src={ClsAnim4} alt="contact-bg-an-01"/></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="section-title text-center mb-10">
                                <h5>On Going Classes</h5>
                                <h2>Get The Best Classes With Us</h2>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="class-item mb-30">
                                <div class="class-img">
                                    <div class="class-img-outer">
                                        <img src={ClassImg1} alt=""/>
                                    </div>                                    
                                </div>
                                <div class="class-content">
                                    <h4 class="title"><a href="class-single.html">Languge Class</a></h4>
                                    <p>Curabitur dignissim at leo sit amet facilisis. Etiam molestie volutpat turpis.</p>
                                     <ul class="schedule">
                                    <li>
                                        <span>Age:</span>
                                        <span class="class-size">5-10 Years</span>
                                    </li>
                                    <li>
                                        <span>Time:</span>
                                        <span class="class-size class-size-2">8-10am</span>
                                    </li>
                                    <li>
                                        <span class="class-price">$50</span>
                                    </li>
                                </ul>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="class-item mb-30">
                                <div class="class-img">
                                    <div class="class-img-outer">
                                        <img src={ClassImg2} alt=""/>
                                    </div>                                    
                                </div>
                                <div class="class-content">
                                    <h4 class="title"><a href="class-single.html">Drawing Class</a></h4>
                                    <p>Curabitur dignissim at leo sit amet facilisis. Etiam molestie volutpat turpis.</p>
                                     <ul class="schedule">
                                    <li>
                                        <span>Age:</span>
                                        <span class="class-size">5-10 Years</span>
                                    </li>
                                    <li>
                                        <span>Time:</span>
                                        <span class="class-size class-size-2">8-10am</span>
                                    </li>
                                    <li>
                                        <span class="class-price">$50</span>
                                    </li>
                                </ul>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="class-item mb-30">
                                <div class="class-img">
                                    <div class="class-img-outer">
                                        <img src={ClassImg3} alt=""/>
                                    </div>                                    
                                </div>
                                <div class="class-content">
                                    <h4 class="title"><a href="class-single.html">Mathematics Class</a></h4>
                                    <p>Curabitur dignissim at leo sit amet facilisis. Etiam molestie volutpat turpis.</p>
                                     <ul class="schedule">
                                    <li>
                                        <span>Age:</span>
                                        <span class="class-size">5-10 Years</span>
                                    </li>
                                    <li>
                                        <span>Time:</span>
                                        <span class="class-size class-size-2">8-10am</span>
                                    </li>
                                    <li>
                                        <span class="class-price">$50</span>
                                    </li>
                                </ul>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="class-item mb-30">
                                <div class="class-img">
                                    <div class="class-img-outer">
                                        <img src={ClassImg4} alt=""/>
                                    </div>                                    
                                </div>
                                <div class="class-content">
                                    <h4 class="title"><a href="class-single.html">Sports Class</a></h4>
                                    <p>Curabitur dignissim at leo sit amet facilisis. Etiam molestie volutpat turpis.</p>
                                     <ul class="schedule">
                                    <li>
                                        <span>Age:</span>
                                        <span class="class-size">5-10 Years</span>
                                    </li>
                                    <li>
                                        <span>Time:</span>
                                        <span class="class-size class-size-2">8-10am</span>
                                    </li>
                                    <li>
                                        <span class="class-price">$50</span>
                                    </li>
                                </ul>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="class-item mb-30">
                                <div class="class-img">
                                    <div class="class-img-outer">
                                        <img src={ClassImg5} alt=""/>
                                    </div>                                    
                                </div>
                                <div class="class-content">
                                    <h4 class="title"><a href="class-single.html">Knowlage Class</a></h4>
                                    <p>Curabitur dignissim at leo sit amet facilisis. Etiam molestie volutpat turpis.</p>
                                     <ul class="schedule">
                                    <li>
                                        <span>Age:</span>
                                        <span class="class-size">5-10 Years</span>
                                    </li>
                                    <li>
                                        <span>Time:</span>
                                        <span class="class-size class-size-2">8-10am</span>
                                    </li>
                                    <li>
                                        <span class="class-price">$50</span>
                                    </li>
                                </ul>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="class-item mb-30">
                                <div class="class-img">
                                    <div class="class-img-outer">
                                        <img src={ClassImg6} alt="" />
                                    </div>                                    
                                </div>
                                <div class="class-content">
                                    <h4 class="title"><a href="class-single.html">Science Class</a></h4>
                                    <p>Curabitur dignissim at leo sit amet facilisis. Etiam molestie volutpat turpis.</p>
                                     <ul class="schedule">
                                    <li>
                                        <span>Age:</span>
                                        <span class="class-size">5-10 Years</span>
                                    </li>
                                    <li>
                                        <span>Time:</span>
                                        <span class="class-size class-size-2">8-10am</span>
                                    </li>
                                    <li>
                                        <span class="class-price">$50</span>
                                    </li>
                                </ul>
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

export default ClassArea;