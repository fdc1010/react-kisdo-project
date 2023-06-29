import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TopServices from '../components/TopServices';

import ServiceImg1 from '../components/img/blog/inner_b1.jpg';
import ServiceImg2 from '../components/img/features/post-img-1.jpg';
class Services extends Component {
    render() {
        return (
            <>
            <TopServices/>
            <div class="about-area5 about-p pt-120 pb-90 p-relative" >
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-4 order-1">
                            <div class="sidebar services-sidebar">
                                <div class="brochures-box">
                                    <div class="inner">
                                    <h4>Download Brochures</h4>
                                    <div class="text">Pleasure and praising pain was born and I will give you a complete account.</div>
                                    <Link to="/" class="theme-btn btn-style-one"><span class="btn-title"><i class="fa fa-file-pdf"></i>Info Company</span></Link>
                                    <Link to="/" class="theme-btn btn-style-one"><span class="btn-title"><i class="fa fa-file-pdf"></i>Brochure Newest</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12 order-2">
                            <div class="service-detail">
                                <div class="content-box">
                                    <div class="mb-30"><img src={ServiceImg1} alt="inner_b1"/></div>
                                    <h2> We give the Best Services </h2>
                                    <p>Pleasure and praising pain was born and I will give you a complete account of the systems, and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally Nor who loves or pursues or desires to obtain pain of itself.</p>
                                    <div class="two-column">
                                        <div class="row">
                                            <div class="image-column col-xl-6 col-lg-12 col-md-12">
                                            <figure class="image"><img src={ServiceImg2} alt=""/></figure>
                                            </div>
                                            <div class="text-column col-xl-6 col-lg-12 col-md-12">
                                        <p>Builds and finances utility scale solar and storage projects throughout the United States. We specialize in developing renewable solutions to suit the specific needs of large investor owned utilities.</p>
                                            <ul class="list-style-one">
                                                <li>Engine oil level should be regularly</li>
                                                <li>Tyres have a minimum of 1.6mm of tread</li>
                                                <li>Ensure that the electrolyte level is correct</li>
                                                <li>Never remove the radiator when the</li>
                                             </ul>
                                         </div>
                                        </div>
                                    </div>
                                    <h3>Why Choose This Service</h3>
                                    <p>Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely.</p>
                                    <p>Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            </>
        );
    }
}

export default Services;