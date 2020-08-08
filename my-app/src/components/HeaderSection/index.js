import React from 'react';
import me from "../../static/images/me.jpg";
import "./HeaderSection.css";

export default function HeaderSection() {
    return (
        <div className="section-container">
            <div className="left-bg-decorator" />
            <div className="container header-container">
                <div className="img-container">
                    <img src={me} alt="What I look like on a good day"/>
                    <div className="img-description">
                        Me trying to fly a drone at the company party.
                    </div>
                </div>
                <div className="content-container">
                    <div className="eyebrow"></div>
                    <div className="page-heading">YeukYu Lee</div>
                    <div className="page-description">
                        <p>Front end developer based in San Francisco Bay Area. Skilled in React, Redux, Next.js, and other modern web application frameworks.</p>
                        <div className="icon-bar">
                            <a className="icon-link" href="http://linkedin.com/in/yeukyulee">
                                <i className="profile-icon fa fa-linkedin fa-lg email-tooltip" aria-hidden="true"></i>
                            </a>
                            <a className="icon-link" href="http://github.com/yeukyul">
                                <i className="profile-icon fa fa-github-alt fa-lg" aria-hidden="true"></i>
                            </a>
                            <a className="icon-link" href="mailto:lyeukyu@gmail.com">
                                <i className="profile-icon fa fa-paper-plane fa-lg" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}