import React, { Component } from 'react';
import SliderArea from '../components/SliderArea';
import BrandArea from '../components/BrandArea';
import ServicesArea from '../components/ServicesArea';
import AboutArea from '../components/AboutArea';
import CounterArea from '../components/CounterArea';
import ClassArea from '../components/ClassArea';
import StepsArea from '../components/StepsArea';
import TeamArea from '../components/TeamArea';

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
            </>
        );
    }
}

export default Homepage;