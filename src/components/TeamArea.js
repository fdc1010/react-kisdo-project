/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TemAni1 from './img/bg/slider_shape01.png';
import TemAni2 from './img/bg/an-img-01.png';

import TeamImg1 from './img/team/team01.png';
import TeamImg2 from './img/team/team02.png';
import TeamImg3 from './img/team/team03.png';
import TeamImg4 from './img/team/team04.png';

class TeamArea extends Component {
    render() {
        return (
            <div className="team-area2 fix p-relative pt-120 pb-90">
                <div class="animations-01"><img src={TemAni1} alt="an-img-01"/></div>
                <div class="animations-02"><img src={TemAni2} alt="contact-bg-an-01"/></div>
                
                <div className="container">  
                    <div className="row"> 
                        <div className="col-lg-12 p-relative">
                           <div className="section-title center-align mb-50 text-center">
                                 <h5>Our Teachers</h5>
                                <h2>Learn from our Expert Team</h2>
                            </div>
                        </div>   
                    </div>
                    <div className="row team-active">
                        <div className="col-xl-4">
                            <div className="single-team mb-30" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src={TeamImg1} alt="img"/>
                                    </div>
                                    
                                    <div className="dropdown">
                                       <a class="xbtn"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       <i class="far fa-share-alt"></i>
                                       </a>
                                      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <div className="team-social mt-15">
                                        <ul>
                                            <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li><Link to="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                      </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4><a href="teacher-single.html">Bableo Dablo</a></h4>
                                    <p>Kids Teacher</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-30" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src={TeamImg2} alt="img"/>
                                    </div>
                                    <div className="dropdown">
                                       <a class="xbtn"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       <i class="far fa-share-alt"></i>
                                       </a>
                                      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <div className="team-social mt-15">
                                        <ul>
                                            <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li><Link to="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                      </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4><a href="teacher-single.html">Dawon Crisen</a></h4>
                                    <p>Kids Teacher</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-30" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src={TeamImg3} alt="img"/>
                                    </div>
                                    <div className="dropdown">
                                       <a class="xbtn"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       <i class="far fa-share-alt"></i>
                                       </a>
                                      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <div className="team-social mt-15">
                                        <ul>
                                            <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li><Link to="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                      </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4><a href="teacher-single.html">David Suarez</a></h4>
                                    <p>Kids Teacher</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-30" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src={TeamImg4} alt="img"/>
                                    </div>
                                    
                                    <div className="dropdown">
                                       <a class="xbtn"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       <i class="far fa-share-alt"></i>
                                       </a>
                                      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <div className="team-social mt-15">
                                        <ul>
                                            <li><Link to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li> 
                                            <li><Link to="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>   
                                            <li><Link to="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link></li>   
                                        </ul>       
                                    </div>
                                      </div>
                                    </div>
                                    
                                    
                                </div>
                                <div className="team-info">
                                    <h4><a href="teacher-single.html">Norma Colins</a></h4>
                                    <p>Kids Teacher</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamArea;