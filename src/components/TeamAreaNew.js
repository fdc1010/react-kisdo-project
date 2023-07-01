/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TeamImg1 from './img/team/team05.png';
import TeamImg2 from './img/team/team06.png';
import TeamImg3 from './img/team/team07.png';
import TeamImg4 from './img/team/team08.png';

class TeamAreaNew extends Component {
    render() {
        return (
            <div className="team-area2 fix p-relative"> 
                <div className="container">  
                    <div className="row team-active">
                        <div className="col-xl-4">
                            <div className="single-team mb-30" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src={TeamImg1} alt="img"/>
                                    </div>
                                    
                                    <div className="dropdown">
                                       <a className="xbtn"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       <i className="far fa-share-alt"></i>
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
                                    <h4>Ostin Green</h4>
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
                                       <a className="xbtn"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       <i className="far fa-share-alt"></i>
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
                                    <h4>Micheal James</h4>
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
                                       <a className="xbtn"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       <i className="far fa-share-alt"></i>
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
                                    <h4>Daniel Matthews</h4>
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
                                       <a className="xbtn"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       <i className="far fa-share-alt"></i>
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
                                    <h4>Brian Phillips</h4>
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

export default TeamAreaNew;