import React from 'react';
import HeaderSection from '../../components/HeaderSection';
import ResumeSection from '../../components/ResumeSection';
import {Animated} from "react-animated-css";

export default function AboutView() {
    return (
        <>
            <Animated animationInDuration={2000} isVisible={true}>
                <HeaderSection />
                <ResumeSection />
            </Animated>
        </>
    );
}