import React from 'react';
import HeaderSection from '../../components/HeaderSection';
import IntroSection from '../../components/IntroSection';
import ContactMeSection from '../../components/ContactMeSection';
import {Animated} from "react-animated-css";

export default function AboutView() {
    return (
        <>
            <Animated animationInDuration={2000} isVisible={true}>
                <HeaderSection />
                <IntroSection />
                <ContactMeSection />
            </Animated>
        </>
    );
}