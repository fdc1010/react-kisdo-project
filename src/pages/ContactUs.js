import React, { Component } from 'react';
import ContactArea from '../components/ContactArea';
import TopContactUs from '../components/TopContactUs';
import MapArea from '../components/MapArea';

class ContactUs extends Component {
    render() {
        return (
            <>
            <TopContactUs/>
            <div id="contact" class="contact-area after-none contact-bg pt-90 pb-30" style={{background: "#12275e"}} >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="contact-info">
                                <div class="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <div class="f-cta-icon">
                                        <i class="far fa-map"></i>
                                    </div>
                                    <h5>Office Address</h5>
                                    <p>30 Gatliff Rd, London SW1W 8QN<br/>United Kingdom</p>
                                </div>
                                <div class="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <div class="f-cta-icon">
                                        <i class="far fa-clock"></i>
                                    </div>
                                    <h5>Working Hours</h5>
                                    <p>Monday to Friday 09:00 to 18:30 <br/> 
                                        Saturday 15:30</p>
                                </div>
                                <div class="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <div class="f-cta-icon">
                                        <i class="far fa-envelope-open"></i>
                                    </div>
                                    <h5>Message Us</h5>
                                    <p>info@example.com</p>
                                    <p>help@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MapArea/>
            <ContactArea/>  
            </>
        );
    }
}

export default ContactUs;