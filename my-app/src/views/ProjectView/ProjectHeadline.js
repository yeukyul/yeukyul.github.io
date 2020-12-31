import React, { Component } from "react";
import "./ProjectHeadline.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Badge from "../../components/Badge";

function Carousel(props) {
    const { items } = props;
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const renderItems = (items) => (
        items.map(item => {
            return item.rawHTML ? item.rawHTML : (
                <div key={item.mediaSrc}>
                    <img src={item.mediaSrc} className={`fit-img-container ${item.border ? 'bordered-img' : ''}`}/>
                    {item.caption && (<p className="sm-margin">{item.caption}</p>)}
                </div>
            );
        })
    );

    return (
        <div>
        <Slider {...settings}>
            {renderItems(items)}
        </Slider>
        </div>
    );
}

export default function ProjectHeadline(props) {
    const {name, description, btnText, btnLink, items, children, badge, type } = props;
    return (
        <div className="section-container">
            <div className="fixed-container-lg">
                 <div className="eyebrow"></div>
                <div className="align-start-row">
                    <div className="project-description">
                        <div className="project-heading heading-font">{name}</div>
                        {badge && (<Badge content={badge} type={type} />)}
                        <div className="paragraph">{description}</div>
                        { btnText && (<a href={btnLink}>{btnText}</a>)}
                    </div>
                    {children ? (<>{children}</>) : (
                        <div className="carousel-container">
                            <Carousel items={items}/>
                        </div>)
                    }
                </div>
            </div> 
        </div>
    );
}