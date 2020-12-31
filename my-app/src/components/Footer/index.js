import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="left"></div>
            <div className="right">
                Hosted on <i className="fab fa-github" aria-label="Github Logo"></i>. 
                Source code <a href="https://github.com/yeukyul/yeukyul.github.io">here</a>.
            </div> 
            {/* <div className="right">
                <a className="footer-icon" href="http://linkedin.com/in/yeukyulee">
                    <i className="fa fa-linkedin fa-lg email-tooltip" aria-hidden="true"></i>
                </a> &nbsp;
                <a className="footer-icon" href="mailto:lyeukyu@gmail.com">
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </a>
            </div> */}
        </footer>
    );
}