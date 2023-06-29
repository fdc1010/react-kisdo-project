import React, { Component } from 'react';
import { Link } from "react-router-dom";

import MainLogo from './img/logo/logo.png';
import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <div className="header-area header-three">
                <div id="header-sticky" className="menu-area">
                    <div className="container">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo">
                                        <Link to="/"><img src={MainLogo} alt="logo"/></Link>
                                    </div>
                                </div>
                                <Navbar/>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Header;