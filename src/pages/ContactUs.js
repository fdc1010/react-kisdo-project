import React, { Component } from 'react';
import ContactArea from '../components/ContactArea';
import TopContactUs from '../components/TopContactUs';
import MapArea from '../components/MapArea';

class ContactUs extends Component {
    render() {
        return (
            <>
            <TopContactUs/>
            <div id="contact" className="contact-area after-none contact-bg pt-90 pb-30" style={{background: "#12275e"}} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-info">
                                <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <div className="f-cta-icon">
                                        <i className="far fa-map"></i>
                                    </div>
                                    <h5>Office Address</h5>
                                    <p>30 Gatliff Rd, London SW1W 8QN<br/>United Kingdom</p>
                                </div>
                                <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <div className="f-cta-icon">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <h5>Working Hours</h5>
                                    <p>Monday to Friday 09:00 to 18:30 <br/> 
                                        Saturday 15:30</p>
                                </div>
                                <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                    <div className="f-cta-icon">
                                        <i className="far fa-envelope-open"></i>
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