import React from 'react';
import coffee_me from "../../static/images/drawings/coffee-me.gif";
import android from "../../static/images/drawings/does-andriod-dream-of-electric-sheep.gif";
import elephant from "../../static/images/drawings/elephan-hydrant.gif";
import hp from "../../static/images/drawings/harry-potter.gif";
import heartburn from "../../static/images/drawings/heart-burn.gif";
import mama_bear from "../../static/images/drawings/mama-bear.gif";
import music from "../../static/images/drawings/music.gif";
import pumpkin from "../../static/images/drawings/pumpkin.gif";
import swat from "../../static/images/drawings/swat.gif";
import yawning_cat from "../../static/images/drawings/yawning-cat.gif";

import portrait1 from "../../static/images/drawings/portrait1.JPG";
import portrait2 from "../../static/images/drawings/portrait2.jpg";
import landscape from "../../static/images/drawings/landscape.jpg";
import landscape1 from "../../static/images/drawings/landscape1.jpg";
import scene from "../../static/images/drawings/scene.JPG";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {Animated} from "react-animated-css";
import "./DrawingView.css";

const animationConfig = [
    {src: android, caption: "Does Android Dream of Electric Sheep?"},
    {src: coffee_me, caption: "Coffee Me"},
    {src: yawning_cat, caption: "Yawning cat"},
    {src: heartburn, caption: "Heartburn"},
    {src: mama_bear, caption: "Mama Bear"},
    {src: pumpkin, caption: "Need a Halloween Costume, Now"},
    {src: music, caption: "Grooving"},
    {src: hp, caption: "Power of words"},
    {src: elephant, caption: "Where do elephants come from?"},
    {src: swat, caption: "Swat"}
];

const artworkConfig = [
    {src: portrait2, caption: "Portrait (Graphite on toned paper)"},
    {src: portrait1, caption: "Portrait (Charcoal on paper)"},
    {src: landscape, caption: "Landscape (Ink on paper)"},
    {src: landscape1, caption: "Landscape (ink on paper)"},
    {src: scene, caption: "Landscape (Digital)"}
];

function ArtworkCarousel({animations}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }
        ]
    };
    const renderItems = (items) => {
        return items.map(item => (
            <div className="sm-margin-horizontal">
                <img className="square-img" src={item.src} />
                <div className="sm-margin">{item.caption}</div>
            </div>
        ));
    };

    return (
        <Slider {...settings}>
            {renderItems(animations)}
        </Slider>
    );
}

const Animation = (props) => (<div><img className="square-img" src={props.src} /></div>);

export default function DrawingView() {
    return (
        <>
            <Animated animationInDuration={2000} isVisible={true}>
                <div className="fixed-container-lg">
                    <div class="lg-margin ">
                        <div className="page-heading sm-margin-horizontal">Sketches</div> 
                        <p className="sm-margin-horizontal">
                            I started drawing since I was 4, and I've never grown out of it. Drawing helps me visualize concepts and untangle thoughts. 
                            Here're some of my recent ones:
                        </p>
                    </div>
                    <div className="md-container">
                        <ArtworkCarousel animations={artworkConfig} />
                    </div>
                    <div class="lg-margin">
                        <div className="page-heading">#madewithlooom</div>
                        <p className="sm-margin-horizontal">
                            Some loopy animations made with the <a href="https://iorama.studio/">Looom</a> app. 
                        </p>
                    </div>
                    <div className="md-container">
                        <ArtworkCarousel animations={animationConfig} />
                    </div>
                </div>
            </Animated>
        </>
    );
} 