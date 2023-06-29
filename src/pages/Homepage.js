import React, { Component } from 'react';
import SliderArea from '../components/SliderArea';
import BrandArea from '../components/BrandArea';
import ServicesArea from '../components/ServicesArea';
import AboutArea from '../components/AboutArea';
import CounterArea from '../components/CounterArea';
import ClassArea from '../components/ClassArea';
import StepsArea from '../components/StepsArea';
import TeamArea from '../components/TeamArea';
import TestimonialArea from '../components/TestimonialArea';
import BlogArea from '../components/BlogArea';
import ContactArea from '../components/ContactArea';

class Homepage extends Component {
    render() {
        return (
            <>
               <SliderArea/> 
               <BrandArea/>
               <ServicesArea/>
               <AboutArea/>
               <CounterArea/>
               <ClassArea/>
               <StepsArea/>
               <TeamArea/>
               <TestimonialArea/>
               <BlogArea/>
               <ContactArea/>
            </>
        );
    }
}

export default Homepage;