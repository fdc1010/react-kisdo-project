import React, { Component } from "react"
import { Link } from "react-router-dom"

import ClsAnim1 from "./img/bg/an-img-06.png"
import ClsAnim2 from "./img/bg/an-img-07.png"
import ClsAnim3 from "./img/bg/an-img-08.png"
import ClsAnim4 from "./img/bg/an-img-09.png"

import ClassImg1 from "./img/class/class-1.jpg"
import ClassImg2 from "./img/class/class-2.jpeg"
import ClassImg3 from "./img/class/class-3.jpeg"
import ClassImg4 from "./img/class/class-4.jpeg"
import ClassImg5 from "./img/class/class-5.jpeg"
import ClassImg6 from "./img/class/class-6.jpeg"

class ClassArea extends Component {
  render() {
    return (
      <div className="class-area pt-120 pb-120 p-relative">
        <div className="animations-06">
          <img src={ClsAnim1} alt="an-img-01" />
        </div>
        <div className="animations-07">
          <img src={ClsAnim2} alt="contact-bg-an-01" />
        </div>
        <div className="animations-08">
          <img src={ClsAnim3} alt="contact-bg-an-01" />
        </div>
        <div className="animations-09">
          <img src={ClsAnim4} alt="contact-bg-an-01" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title text-center mb-10">
                <h5>On Going Classes</h5>
                <h2>Get The Best Classes With Us</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src={ClassImg1} alt="" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/languageclass">Language Class</Link>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam
                      molestie volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src={ClassImg2} alt="" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/drawingclass">Drawing Class</Link>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam
                      molestie volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src={ClassImg3} alt="" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/mathematicsclass">Mathematics Class</Link>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam
                      molestie volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src={ClassImg4} alt="" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/sportsclass">Sports Class</Link>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam
                      molestie volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src={ClassImg5} alt="" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/knowledgeclass">Knowledge Class</Link>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam
                      molestie volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src={ClassImg6} alt="" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <Link to="/scienceclass">Science Class</Link>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam
                      molestie volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ClassArea
