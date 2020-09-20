import React from 'react';
import resume from "../../static/document/yeukyulee_resume.pdf";
import "./ContactMeSection.css";

export default function ContactMeSection() {
    return (
        <div className="center-align">
            <a href={resume} className="bg-link" download>
                SEE MY RESUME INSTEAD &nbsp;
                <i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
            </a>
        </div>
    );
}

