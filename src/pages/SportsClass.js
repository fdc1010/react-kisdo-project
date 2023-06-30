import React, { Component } from 'react';
import TopClasses from '../components/TopClasses';
import BrandArea from '../components/BrandArea';
import ClassImg4 from '../components/img/class/class-4.jpeg';

class SportsClass extends Component {
    render() {
        return (
            <>
             <TopClasses/> 
             <div className="project-detail">
                <div className="container">
                    <div className="row">
                        <div className="text-column col-lg-8 col-md-8 col-sm-12">
                            <h2>Sports Classes</h2>
                                <div className="upper-box">
                                    <div className="single-item-carousel owl-carousel owl-theme">
                                        <figure className="image"><img src={ClassImg4} alt="class"/></figure>    
                                    </div>
                                </div>
                            <div className="inner-column">                                
                                <p><span className="dropcap">U</span> Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquet per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut aliquam massa nisl quis neque.Sauris in erat justo. Nullam ac urna eu felis dapibus sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi..</p>

                                <p>The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.</p>
                                <h4>Study Options:</h4>
                                <table className="table table-bordered mb-30">
                                                        <thead>
                                                            <tr>
                                                                <th>Qualification</th>
                                                                <th>Length</th>
                                                                <th>Code</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Bsc (Hons)</td>
                                                                <td>3 years full time</td>
                                                                <td>CDX3</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Bsc </td>
                                                                <td>4 years full time</td>
                                                                <td>CDX4</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                <h4>What You Will Learn</h4>
                                <p> Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit </p>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <ul className="pr-ul">
                                    <li>
                                        <div className="icon"><i className="fal fa-check"></i></div>
                                        <div className="text">
                                           Crawl accessibility so engines can read your website
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="fal fa-check"></i></div>
                                        <div className="text">
                                            Share-worthy content that earns links, citations
                                        </div>
                                    </li>
                                     <li>
                                        <div className="icon"><i class="fal fa-check"></i></div>
                                        <div className="text">
                                          Keyword optimized to attract searchers & engines
                                        </div>
                                    </li>
                                     <li>
                                        <div className="icon"><i className="fal fa-check"></i></div>
                                        <div className="text">
                                           Title, URL, & description to draw high CTR in the rankings
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="fal fa-check"></i></div>
                                        <div className="text">
                                           Great user experience including a fast load speed
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-widget">
                                <div className="widget widget_search">
                                    <div className="course-widget-price">
                                        <h2 className="widget-title">Course Features</h2>
                                            <ul>
                                                <li><i className="fal fa-clock"></i><span>Starts</span><span className="time">May 29, 2016</span></li>
                                                <li><i className="fal fa-exclamation-circle"></i><span>Duration</span><span className="time">2 Months</span></li>
                                                <li><i className="fab fa-leanpub"></i><span>Class Duration</span><span className="time">7:00 - 9:00</span></li>
                                                <li><i className="fal fa-user-graduate"></i><span>Institution</span><span className="time">ABC University</span></li>
                                                <li><i className="fal fa-plus-hexagon"></i><span>Seats Available</span><span className="time">23 Student</span></li>
                                                <li><i className="fal fa-user"></i><span>Level</span><span className="time">All level</span></li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <BrandArea/>  
            </>
        );
    }
}

export default SportsClass;