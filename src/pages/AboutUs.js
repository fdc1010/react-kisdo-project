import React, { Component } from 'react';
import AboutArea from '../components/AboutArea';
import CounterArea from '../components/CounterArea';
import TestimonialArea from '../components/TestimonialArea';
import BrandArea from '../components/BrandArea';
import TopAboutUs from '../components/TopAboutUs';
import VideoArea from '../components/VideoArea';

class AboutUs extends Component {
    render() {
        return (
            <>
            <TopAboutUs/>
            <AboutArea/> 
            <CounterArea/>
            <VideoArea/>
            <TestimonialArea/>
            <BrandArea/>
            </>
        );
    }
}

export default AboutUs;