import React from 'react';
import HeaderSection from '../../components/HeaderSection';
import IntroSection from '../../components/IntroSection';
import ResumeSection from '../../components/ResumeSection';
import ContactMeSection from '../../components/ContactMeSection';
import {Animated} from "react-animated-css";
import ProjectView from '../ProjectView';

export default function AboutView() {
    return (
        <>
            <Animated animationInDuration={2000} isVisible={true}>
                <HeaderSection />
                <ProjectView />
                {/* <ResumeSection /> */}
                {/* <IntroSection /> */}
                {/* <ContactMeSection /> */}
            </Animated>
        </>
    );
} 