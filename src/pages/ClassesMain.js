import React, { Component } from 'react';
import TopClasses from '../components/TopClasses';
import ClassArea from '../components/ClassArea';
import BrandArea from '../components/BrandArea';

class ClassesMain extends Component {
    render() {
        return (
            <>
            <TopClasses/>
            <ClassArea/>
            <BrandArea/> 
            </>
        );
    }
}

export default ClassesMain;