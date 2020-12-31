import React from 'react';
import "./PageBanner.css";

export default function PageBanner() {
    return (
        <div className="section-container banner-container">
            <div className="container header-container">
                <div className="banner-content-container">
                    <div className="page-subheading">
                        What got me into engineering was the excitement of realizing ideas.
                    </div>
                    <p className="md-margin">
                        So I've experimented with a fair share of technologies. Here're some of my side projects.
                    </p>
                </div>
            </div>
        </div>
    );
}