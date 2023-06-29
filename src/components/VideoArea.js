import React, { Component } from 'react';
import VideoImg from './img/bg/vedio-img.png';

class VideoArea extends Component {
    render() {
        return (
            <div id="vedio" className="vedio-area pt-120 pb-90 fix" >
                <div className="container">
                    <div className="row">   
                        <div className="col-lg-12">
                            <div className="section-title center-align text-center mb-15">
                                <h5>Watch Us</h5>
                                <h2>Start Growing With Community</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <div className="video-img wow fadeInRight animated" data-animation="fadeInDown animated" data-delay=".2s" style={{backgroundImage: `url(${VideoImg})` }}>								
                                <a href="https://www.youtube.com/" class="video-i popup-video"><i class="far fa-play"></i></a>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoArea;