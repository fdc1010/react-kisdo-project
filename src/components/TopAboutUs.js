import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TopAboutUsImg from './img/bg/bdrc-bg.jpg';


class TopAboutUs extends Component {
    render() {
        return (
            <div className="breadcrumb-area d-flex align-items-center" style={{backgroundImage: `url(${TopAboutUsImg})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title">
                                    <h2>About Us</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                            </ol>
                                        </nav>
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

export default TopAboutUs;