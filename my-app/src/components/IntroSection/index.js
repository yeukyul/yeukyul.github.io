import React from 'react';
import "./IntroSection.css";
import resume from "../../static/document/yeukyulee_resume.pdf";
import EntryLine from "../EntryLine";
import Entry from "../Entry";
import StatementSection from "../StatementSection";

//TODO: extract container styling to global level
export default function IntroSection() {
    return (
        <div className="section-container">
            <div className="fixed-container">
                <div className="header-row">
                    <div className="page-heading">In short, I'm...</div>
                </div>
                <div className="resume-content">
                    <StatementSection
                        statement={"A problem solver who demonstrates the tendency to lead and an insatiable desire to learn."}
                    >
                        <Entry header={"As a Software Engineer at Chegg Inc."}>
                            <EntryLine
                                iconClass={"fas fa-users"}
                                title={"Led 8 Engineers as the Scrum Master"}
                            >
                                Oversaw the timeline of the development team deliverables and facilitated interteam communications. Worked closely with both product and engineering Manager to manage resources and requirements. Upheld agile scrum management process.
                            </EntryLine>
                            <EntryLine
                                iconClass={"fas fa-credit-card"}
                                title={"Rewrote the Checkout Experience in React/Redux"}
                            >
                                A major team player in retiring the PHP commerce system and building the tech stack-agnostic, component-based checkout experience for the verticals at Chegg.  
                            </EntryLine>
                        </Entry>
                        <Entry header={"Outside of work"}>
                            <EntryLine
                                iconClass={"fab fa-aws"}
                                title={"Obtained the AWS Developer Associate Certification"}
                            >
                                Mastered the foundational and specialty cloud computing topics pertaining to AWS services. Certified in 2019 with a passing score of 92%.
                            </EntryLine>
                            <EntryLine
                                iconClass={"fas fa-graduation-cap"}
                                title={"Attended the UC Santa Cruz Extension for Continuous Professional Development"}
                            >
                                Completed the project management courses - "Roles of a Project Manager" and "Leadership and Communication".
                            </EntryLine>
                        </Entry>
                    </StatementSection>
                    <StatementSection
                        statement={"An empathetic citizen who's passionate about giving back to the communities she’s in."}
                    >
                        <Entry header={"As a Community Manager at&nbsp;<a href='cmute.io'>CMU Tech & Entrepreneurship</a>"}>
                            <EntryLine
                                iconClass={"fas fa-people-arrows"}
                                title={"Organized Events for the Carnegie Mellon Startup Community"}
                            >
                                Frequently organized meetups like the bi-weekly happy hour and the <a href="cmute.io/future-founders">Future Founders</a> Program.
                            </EntryLine>
                            <EntryLine
                                iconClass={"fab fa-slack"}
                                title={"Launched Engagement Initiatives"}
                            >
                                In a Alumni Community with now more than 1.5k Members
                            </EntryLine>
                        </Entry>
                        <Entry header={"As a Course Instructor and Volunteer at the San Jose Public Library"}>
                            <EntryLine
                                iconClass={"fas fa-language"}
                                title={"Designed and Taught Introductory Chinese Language Class"}
                            >
                                A six-week course designed for children to learn more about the origin and wonder of the Chinese laungauge. <a href="https://sjpl.bibliocommons.com/events/5f23634a2b372c4500d7dd64">Details here</a>
                            </EntryLine>
                            <EntryLine
                                iconClass={"fas fa-book"}
                                title={"Helped Organize Booksales and Manage Donation Books"}
                                content={"something something"}
                            ></EntryLine>
                        </Entry>
                        <Entry header={"As an Undergraduate Student at Carnegie Mellon University"}>
                            <EntryLine
                                iconClass={"fas fa-chalkboard-teacher"}
                                title={"Became a Teaching Assistant for the Following Courses:"}
                            >
                                <ul>
                                    <li>Web Application Development</li>
                                    <li>Statistical Graphics and Visualization</li>
                                    <li>Fundamentals of Programming and Computer Science (named by Bloomberg as <a href="https://www.bloomberg.com/news/articles/2015-06-11/five-of-the-best-computer-science-classes-in-the-country">one of the top 5 CS classes</a> in the US) </li>
                                </ul>
                            </EntryLine>
                            <EntryLine
                                iconClass={"fas fa-award"}
                                title={"Received the Senior Leadership Recognition in 2018"}
                            >
                                For leadership, involvement, and civic engagement.
                            </EntryLine>
                        </Entry>
                    </StatementSection>
                    <StatementSection
                        statement={"A builder who's looking to solve everyday problems and make an impact."}
                    >
                        <Entry header={"Published at"}>
                            <EntryLine
                                iconClass={"far fa-newspaper"}
                                title={"British HCI (BHCI) Conference in 2017"}
                            >
                                Multimodal Interaction and Believability: How Can We Design and Evaluate the Next Generation of IPA?
                                <br></br>
                                <a href="https://dl.acm.org/doi/10.14236/ewic/HCI2017.17">Full article here.</a>
                            </EntryLine>
                        </Entry>
                        <Entry header={"Pour heart and time into these projects"}>
                            <ul>
                                <li>Carnegie Mellon FCE (Faculty Course Evaluation) Visualizer (Hackathon winner. Later awarded with Social Impact Prize in ImpactCMU).</li>
                                <li><a href="https://github.com/yeukyul/lindia">R Package: Lindia</a></li>
                                <li>Picasso In a Box</li>
                                <li>Music Printer</li>
                            </ul>
                        </Entry>
                    </StatementSection>
                </div>
            </div>
        </div>
    );
}