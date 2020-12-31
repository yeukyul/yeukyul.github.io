import React from 'react';
import "./ResumeSection.css";
import cmu_logo from "../../static/images/cmu_logo.png";
import chegg_logo from "../../static/images/chegg_logo.jpg";
import sjpl_logo from "../../static/images/SJPL_logo.jpeg";
import cmute_logo from "../../static/images/cmute_logo.png";
import mc_logo from "../../static/images/merchant_candy_logo.svg";
import aws_logo from "../../static/images/aws_logo.jpeg";
import resume from "../../static/document/yeukyulee_resume.pdf";

//TODO: extract container styling to global level
export default function ResumeSection() {
    return (
        <div className="section-container">
            <div className="fixed-container">
                <div className="header-row">
                    <div className="page-heading">Experience</div>
                    <div className="btn-container">
                        <a href={resume} className="btn-like-link" download>
                            RESUME &nbsp;
                            <i class="fas fa-download"></i>
                        </a>
                    </div>
                </div>
                <div className="resume-content">
                    <div className="row">
                        <div className="rowname">Work</div>
                        <div className="entry">
                                <div className="entry-header v-center">
                                    <div className="entry-logo">
                                        <img src={mc_logo} alt="Merchant Candy Logo"></img>
                                    </div>
                                    <div>
                                    <   div class="eyebrow narrow-visual-guide" />
                                        <div className="entry-name">Merchant Candy</div>
                                        <div className="entry-subtext">Emeryville, CA</div>
                                    </div>
                                </div>
                                <div className="entry-progression">
                                    <div className="title-container">
                                        <div className="title">Software Engineer</div>
                                        <p className="years">Oct 2020 - Present</p>
                                    </div>
                                </div>
                            </div>
                        <div className="entries">
                            <div className="entry">
                                <div className="entry-header v-center">
                                    <div className="entry-logo">
                                        <img src={chegg_logo} alt="Chegg Logo"></img>
                                    </div>
                                    <div>
                                        <div class="eyebrow narrow-visual-guide" />
                                        <div className="entry-name">Chegg Inc.</div>
                                        <div className="entry-subtext">Santa Clara, CA</div>
                                    </div>
                                </div>
                                <div className="entry-progression">
                                    <div className="title-container">
                                        <div className="title">Software Engineer II</div>
                                        <p className="years">Dec 2019 - Oct 2020</p>
                                        <p>Front-end engineer and the scrum master of the front-end commerce team. </p>
                                    </div>
                                    <div className="title-container">
                                        <div className="title">Software Engineer</div>
                                        <p className="years">Jul 2018 - Dec 2019</p>
                                    </div>
                                    <div className="title-container">
                                        <div className="title">Software Engineering Intern</div>
                                        <div className="years"></div>
                                        <p className="years">Jun 2017 - Aug 2017</p>
                                    </div>
                                </div>
                            </div>
                            <div className="entry">
                                <div className="entry-header v-center">
                                    <div className="entry-logo">
                                        <img src={cmu_logo} alt="Carnegie Mellon Logo"></img>
                                    </div>
                                    <div>
                                    <   div class="eyebrow narrow-visual-guide" />
                                        <div className="entry-name">Carnegie Mellon University</div>
                                        <div className="entry-subtext">Pittsburgh, PA</div>
                                    </div>
                                </div>
                                <div className="entry-progression">
                                    <div className="title-container">
                                        <div className="title">Teaching Assistant</div>
                                        <p className="years">Dec 2019 - Present</p>
                                        <p>For the following courses: </p>
                                        <ul>
                                            <li>Web Application Development (Jan - May 2018)</li>
                                            <li>Statistical Graphics and Visualization (Aug - Dec 2017)</li>
                                            <li>Fundamentals of Programming and Computer Science (Aug 2015 - Dec 2016)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rowname">Volunteer</div>
                        <div>
                            <div className="entry">
                                <div className="entry-header">
                                    <div className="entry-logo">
                                        <img src={cmute_logo} alt="CMU Tech and Entreprenurship Logo"></img>
                                    </div>
                                    <div>
                                        <div class="eyebrow narrow-visual-guide" />
                                        <div className="entry-name">Carnegie Mellon Tech &amp; Entrepreneurship (Bay Area)</div>
                                        <div className="title">Community Manager</div>
                                        <p>
                                            Plan and execute community engagement initiatives for a community with more than 1.5k Carnegie Mellon Alumni with interest in Technology and Entrepreneurship.
                                            <br/>
                                            <a href="https://cmute.io/">Learn more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="entry">
                                <div className="entry-header">
                                    <div className="entry-logo">
                                        <img src={sjpl_logo} alt="San Jose Public Library Logo"></img>
                                    </div>
                                    <div>
                                        <div class="eyebrow narrow-visual-guide" />
                                        <div className="entry-name">San Jose Public Library (SJPL)</div>
                                        <div className="title">Volunteer</div>
                                        <p>
                                            Design and taught a 6-week Chinese Language Class for the SJPL Alviso Branch. 
                                            <br/>
                                            <a href="https://sjpl.bibliocommons.com/events/5f23634a2b372c4500d7dd64">Learn more</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rowname">Education</div>
                        <div>
                            <div className="entry">
                                <div className="entry-header">
                                    <div className="entry-logo">
                                        <img src={cmu_logo} alt="Carnegie Mellon Logo"></img>
                                    </div>
                                    <div>
                                        <div class="eyebrow narrow-visual-guide" />
                                        <div className="entry-name">Carnegie Mellon University '18</div>
                                        <div className="entry-subtext">Pittsburgh, PA</div>
                                        <p><strong>Bachelor of Science in Statistics</strong></p>
                                        <p>Minor in Computer Science</p>
                                        <p>Graduated with University and College Honors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rowname">Certification</div>
                        <div>
                            <div className="entry">
                                <div className="entry-header">
                                    <div className="entry-logo">
                                        <img src={aws_logo} alt="AWS Logo"></img>
                                    </div>
                                    <div>
                                    <div class="eyebrow narrow-visual-guide" />
                                <div className="entry-name">Amazon Web Services (AWS)</div>
                                <div className="entry-subtext">Developer Associate 2019</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rowname">Skills</div>
                        <ul className="entry skills">
                            <li><b>Programming Languages:</b> HTML, CSS, Javascript (ES6), PHP, C, Java, Python, R</li>
                            <li><b>Frameworks/Libraries:</b> React, Redux, Typescript, Next.Js, Backbone.js, Apollo, GraphQL, Styled Component, SASS</li>
                            <li><b>Testing Frameworks:</b> Jest, React Testing Library, Enzyme, Cypress, TestCafe</li>
                            <li><b>Technical Concepts:</b> Version Control (Git), MVC, Microservices, Build Tools (Jenkins, Gitlab, Webpack), Package Manager (yarn, npm), Design Patterns, Accessibility, Web Performance, Serverless, Amazon Web Services</li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="rowname">Publication</div>
                        <div className="entry one-liner">
                            Multimodal interaction and believability: how can we design and evaluate the next generation of IPA?
                            <br/>
                            <a href="https://dl.acm.org/doi/10.14236/ewic/HCI2017.17">Full article here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}