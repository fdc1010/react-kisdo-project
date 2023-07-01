import React, { Component } from "react"

import BlogAnim1 from "./img/bg/an-img-08.png"
import BlogAnim2 from "./img/bg/an-img-02.png"

import BlogImg1 from "./img/blog/inner_b1.jpg"
import BlogImg2 from "./img/blog/inner_b2.jpeg"
import BlogImg3 from "./img/blog/inner_b3.jpeg"

class BlogArea extends Component {
  render() {
    return (
      <div id="blog" className="blog-area p-relative fix pt-120 pb-120">
        <div className="animations-01">
          <img src={BlogAnim1} alt="an-img-01" />
        </div>
        <div className="animations-02">
          <img src={BlogAnim2} alt="contact-bg-an-01" />
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title center-align mb-10 text-center">
                <h5>Our Blog</h5>
                <h2>Latest Blog & News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-post2 mb-30">
                <div className="blog-thumb2">
                  <img src={BlogImg1} alt="img" />
                </div>
                <div className="blog-content2">
                  <h4>Nam at velit vel enim placerat fringilla.</h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="b-meta">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="meta-info">
                          <ul>
                            <li>
                              <i className="fal fa-calendar-alt"></i> 24th March
                              2021
                            </li>
                            <li>
                              <i className="fal fa-user"></i> By Jhone Doe
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-post2 mb-30">
                <div className="blog-thumb2">
                  <img src={BlogImg2} alt="img" />
                </div>
                <div className="blog-content2">
                  <h4>Tem at velit vel enim placerat fringilla.</h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="b-meta">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="meta-info">
                          <ul>
                            <li>
                              <i className="fal fa-calendar-alt"></i> 24th March
                              2021
                            </li>
                            <li>
                              <i className="fal fa-user"></i> By Jhone Doe
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-post2 mb-30">
                <div className="blog-thumb2">
                  <img src={BlogImg3} alt="img" />
                </div>
                <div className="blog-content2">
                  <h4>Sam at velit vel enim placerat fringilla.</h4>
                  <p>
                    Curabitur sagittis libero tincidunt tempor finibus. Mauris
                    at dignissim ligula, nec tristique orci.
                  </p>
                  <div className="b-meta">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="meta-info">
                          <ul>
                            <li>
                              <i className="fal fa-calendar-alt"></i> 24th March
                              2021
                            </li>
                            <li>
                              <i className="fal fa-user"></i> By Jhone Doe
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default BlogArea
