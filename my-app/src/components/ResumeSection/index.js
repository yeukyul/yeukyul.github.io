import React from 'react';
import "./ResumeSection.css";
import cmu_logo from "../../static/images/cmu_logo.png";
import cornell_logo from "../../static/images/cornell_logo.png";
import streamlined_logo from "../../static/images/streamlined_logo.png";
import chime_logo from "../../static/images/chime_logo.png";
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
                                        <img src={chime_logo} alt="Chime logo"></img>
                                    </div>
                                    <div>
                                    <   div class="eyebrow narrow-visual-guide" />
                                        <div className="entry-name">Chime Financial</div>
                                        <div className="entry-subtext">Remote</div>
                                    </div>
                                </div>
                                <div className="entry-progression">
                                    <div className="title-container">
                                        <div className="title">Senior Design Engineer</div>
                                        <p className="years">April 2024 - Now</p>
                                        <p>
                                            <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <div className="entry">
                                <div className="entry-header v-center">
                                    <div className="entry-logo">
                                        <img src={streamlined_logo} alt="Streamlined Payments logo"></img>
                                    </div>
                                    <div>
                                    <   div class="eyebrow narrow-visual-guide" />
                                        <div className="entry-name">Streamlined Payments</div>
                                        <div className="entry-subtext">Remote</div>
                                    </div>
                                </div>
                                <div className="entry-progression">
                                    <div className="title-container">
                                        <div className="title">Product Lead</div>
                                        <p className="years">Nov 2021 - Feb 2024</p>
                                        <p>
                                            <br/>
                                            I was the first employee at the B2B payment FinTech startup. Started out as a front-end engineer, I transitioned into product design and management.
                                        </p>
                                        <p>
                                            <br/>
                                            During my time there, I:
                                        </p>
                                        <ul>
                                            <li>Designed every UI feature, including Streamlined invoicing, checkout, customer onboarding, dashboard, AR (accounts receivable) reporting, and others.</li>
                                            <li>Wrote majority of the front-end code, keeping in mind best practices like accessibility, mobile responsiveness, performance etc. Set up analytics and error monitoring platform. Frequently collaborated with fellow engineers on code reviews, architecture designs, and tech initiatives.</li>
                                            <li>Led quaterly and sprint plannings. Gathered product requirements, wrote tickets, and prioritized features with the product team. </li>
                                            <li>Shaped Streamlined’s branding. Designed landing pages, ads, swags etc. Designed email communications (sequences, newsletters, notifications)</li>
                                        </ul>
                                            {/* <br/><br />
                                            I was also the scrum master of the 8-person commerce engineering team, delivering several partnership projects with brands like Verizon and SNHU, bringing Chegg more than $5m in revenue.
                                            <br /><br/>
                                        </p> */}
                                    </div>
                                    <div className="title-container">
                                        <div className="title">Software Engineer</div>
                                        <p className="years">Oct 2020 - Nov 2021</p>
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
                                        <p>
                                            <br/>
                                            As an engineer on the commerce (checkout) team, I was the tech lead for several highly visible initiatives on authentication and home pages that serve millions of site traffic daily, the accessibility audit leader who drove commerce pages to be 100% AAA compliant, and a contributor of a product-agnostic checkout component. 
                                            <br/><br />
                                            I was also the scrum master of the 8-person commerce engineering team, delivering several partnership projects with brands like Verizon and SNHU, bringing Chegg more than $5m in revenue.
                                            <br /><br/>
                                        </p>
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
                                        <p className="years">Dec 2015 - May 2018</p>
                                        <p>For the following courses: </p>
                                        <ul>
                                            <li>17437 - Web Application Development</li>
                                            <li>36315 - Statistical Graphics and Visualization</li>
                                            <li>15112 - Fundamentals of Programming and Computer Science</li>
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
                                        <div className="entry-name">Carnegie Mellon Tech &amp; Entrepreneurship</div>
                                        <div className="title">Head of Event Series</div>
                                        <p>
                                            {/* Plan and execute community engagement initiatives for a community with more than 1.5k Carnegie Mellon Alumni with interest in Technology and Entrepreneurship. */}
                                            Led a team of 6 to organize 30+ professional events for a community with 5000+ members. Launched initiatives like the Future Founders program to foster an entrepreneurial culture among CMU alumni.
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
                                        <img src={cornell_logo} alt="Cornell University Logo"></img>
                                    </div>
                                    <div>
                                        <div class="eyebrow narrow-visual-guide" />
                                        <div className="entry-name">Cornell Tech '23</div>
                                        <div className="entry-subtext">New York, NY</div>
                                        <p><strong>Master of Science Information Systems</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    {/* <div className="row">
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
                    </div> */}
                    <div className="row">
                        <div className="rowname">Skills</div>
                        <ul className="entry skills">
                            <li><b>Programming Languages:</b> Javascript (ES6), HTML, CSS, PHP, C, Java, Python, R</li>
                            <li><b>Frameworks/Libraries:</b> React, Next.Js, Redux, Typescript, Styled Component, SASS</li>
                            <li><b>Testing Frameworks:</b> Jest, React Testing Library, Enzyme, Cypress, TestCafe</li>
                            <li><b>Technical Concepts:</b> Version Control (Git), MVC, Microservices, Build Tools (Jenkins, Gitlab, Webpack), Package Manager (yarn, npm), Design Patterns, Accessibility, Web Performance, Serverless, Amazon Web Services</li>
                            <li><b>Design tools:</b> Figma, Sketch, Adobe Illustrator, Procreate</li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="rowname">Publication</div>
                        <div className="entry">
                            <p>Data Stewardship in Clinical Computer Security: Balancing Benefit and Burden in Participatory Systems</p>
                            <p>CSCW '24 - Paper - <a href="https://dl.acm.org/doi/10.14236/ewic/HCI2017.17">Full article</a></p>
                        </div>
                        <div className="entry">
                            <p>Possible Effects of Graphical Choices on Visual Inferences</p>
                            <p>JSM (Joint Statistical Meeting) ‘21 - <a href="https://ww2.amstat.org/meetings/jsm/2021/onlineprogram/AbstractDetails.cfm?abstractid=319126">Link</a></p>
                            <p>TLDR; Can the graphical methods we choose (e.g. which plot we use to understand data) affect the results of statistical tests downstream?</p>
                        </div>
                        <div className="entry">
                            <p>Multimodal interaction and believability: how can we design and evaluate the next generation of IPA?</p>
                            <p>BHCI '17 - Position Paper - <a href="https://dl.acm.org/doi/10.14236/ewic/HCI2017.17">Full article</a></p>
                            <p>TLDR; how should we design the next generation of voice assistants (e.g. Siri, Cortana)?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}