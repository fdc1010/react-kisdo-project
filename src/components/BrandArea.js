import React, { Component } from 'react';
import BrandImg1 from './img/brand/b-logo1.png';
import BrandImg2 from './img/brand/b-logo2.png';
import BrandImg3 from './img/brand/b-logo3.png';
import BrandImg4 from './img/brand/b-logo4.png';
import BrandImg5 from './img/brand/b-logo5.png';
import BrandImg6 from './img/brand/b-logo6.png';

class BrandArea extends Component {
    render() {
        return (
            <div className="brand-area pt-60 pb-60 brand-area-style">
                <div class="container-fluid">
                    <div class="row brand-active">
                    <div class="col-xl-2">
                            <div class="single-brand">
                                 <img src={BrandImg1} alt="img"/>
                            </div>
                        </div>
                       <div class="col-xl-2">
                            <div class="single-brand">
                                     <img src={BrandImg2} alt="img"/>
                            </div>
                        </div>
                        <div class="col-xl-2">
                            <div class="single-brand">
                                  <img src={BrandImg3} alt="img"/>
                            </div>
                        </div>
                        <div class="col-xl-2">
                            <div class="single-brand">
                                  <img src={BrandImg4} alt="img"/>
                            </div>
                        </div>
                         <div class="col-xl-2">
                            <div class="single-brand">
                                 <img src={BrandImg5} alt="img"/>
                            </div>
                        </div>
                        <div class="col-xl-2">
                            <div class="single-brand">
                                 <img src={BrandImg6} alt="img"/>
                            </div>
                        </div>
                        <div class="col-xl-2">
                            <div class="single-brand">
                                  <img src={BrandImg3} alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandArea;