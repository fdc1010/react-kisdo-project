import React, { Component } from 'react';
import TeamArea from '../components/TeamArea';
import TopTeachers from '../components/TopTeachers';
import TeamAreaNew from '../components/TeamAreaNew';

class TeachersMain extends Component {
    render() {
        return (
            <>
            <TopTeachers/>
            <TeamArea/>
            <TeamAreaNew/>
            </>
        );
    }
}

export default TeachersMain;