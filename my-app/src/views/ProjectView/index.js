import React from 'react';
import PageBanner from './PageBanner';
import ProjectHeadline from './ProjectHeadline';
import {Animated} from "react-animated-css";
// picasso 
import demo from "../../static/images/projects/picasso/demo.gif";
import engraving1 from "../../static/images/projects/picasso/drawbot_engravement_design1.png";
import engraving2 from "../../static/images/projects/picasso/drawbot_engravement_design2.png";
import engraving3 from "../../static/images/projects/picasso/drawbot_engravement_design3.png";
import engraving_final from "../../static/images/projects/picasso/engravemen_final.png";
import picasso_inside from "../../static/images/projects/picasso/inside.JPG";
//easel
import easel_home from "../../static/images/projects/easel/home.jpg";
import easel_signup from "../../static/images/projects/easel/signup.jpg";
import easel_editor from "../../static/images/projects/easel/editor.png";
import easel_demo from "../../static/images/projects/easel/site_editor_demo.gif";
import easel_style from "../../static/images/projects/easel/easel-style-guide.jpg";
//cmueval
import cmu_landing from "../../static/images/projects/cmueval/cmueval_landing_page.png";
import cmu_original from "../../static/images/projects/cmueval/currentFCE.png";
import cmu_r from "../../static/images/projects/cmueval/cmueval_courses.png";
import cmu_course from "../../static/images/projects/cmueval/cmu_course.png";
import cmu_compare from "../../static/images/projects/cmueval/cmu_compare.png";
import cmu_planning from "../../static/images/projects/cmueval/cmu_planning.png";
// savagebot
import savage_home from "../../static/images/projects/savagebot/cover.png";
import savage_demo from "../../static/images/projects/savagebot/demo.gif";
// lindia
import lindia_base_r from "../../static/images/projects/lindia/baseR.png";
import lindia_ggplot from "../../static/images/projects/lindia/lindia_output.png";
//automaton
import automaton_demo from "../../static/images/projects/automaton/demo.gif";
import automaton_v1 from "../../static/images/projects/automaton/v1.JPG";
import automaton_v2 from "../../static/images/projects/automaton/v2.JPG";
import automaton_v3 from "../../static/images/projects/automaton/v3.JPG";
import automaton_mechanism from "../../static/images/projects/automaton/mechanism.JPG";
import automaton_bird from "../../static/images/projects/automaton/bird.JPG";
import automaton_inside from "../../static/images/projects/automaton/inside.JPG";
//grumblr
import grumblr_signin from "../../static/images/projects/grumblr/signin.png";
import grumblr_stream from "../../static/images/projects/grumblr/stream.png";
import grumblr_profile from "../../static/images/projects/grumblr/profile.png";
import grumblr_style from "../../static/images/projects/grumblr/styleguide.png";

import Collapsible from '../../components/Collapsible';

export default function ProjectView() {
    return (
        <>
            {/* <Animated animationInDuration={2000} isVisible={true}> */}
                <PageBanner />
                {/* Picasso in a box */}
                <ProjectHeadline 
                    items={[
                        { mediaSrc: demo, caption: ''},
                        { mediaSrc: engraving1, caption: 'Early designs for engravement: variation 1'},
                        { mediaSrc: engraving2, caption: 'Early designs for engravement: variation 2'},
                        { mediaSrc: engraving3, caption: 'Early designs for engravement: variation 3'},
                        { mediaSrc: engraving_final, caption: 'Final engravement design'},
                        { mediaSrc: picasso_inside, caption: 'Wiring of the inside'}
                    ]}
                    name={(
                        <span>
                            <span className="project-heading">{"Picasso-in-a-box "}</span>
                        </span>
                    )}
                    badge="Microcontroller"
                    type="hardware"
                    description={(<>
                        A robot that can be programmed to draw specific shapes. It's originally named draw-bot, but given the abstract-ness of the output, let's just call it Picasso-in-a-box.
                        <br></br>
                        <Collapsible heading="Ingredients list">
                            <ul>
                                <li>2 x Arduino Nano</li>
                                <li>2 x Servo Motor</li>
                                <li>2 x 9V batteries</li>
                                <li>2 x Wheel</li>
                                <li>More wires</li>
                                <li>1 x Sharpie</li>
                                <li>Rubberband to fit the sharpie</li>
                            </ul>
                        </Collapsible>
                    </>)} />
                {/* Music printer */}
                <ProjectHeadline 
                    name={(
                        <span>
                            <span className="project-heading">{"Music Printer "}</span>
                            <i className="profile-icon fa fa-music fa-sm" aria-hidden="true"></i>
                        </span>
                    )}
                    description={(<>
                        What if a keyboard can print out music score as you play? Composing would be easier, I think.
                        <br></br>
                        <Collapsible heading="Ingredients list">
                            <ul>
                                <li>1 x Arduino Uno</li>
                                <li>1 x <a href="https://www.adafruit.com/product/597">Thermo receipt printer</a></li>
                                <li>1 x <a href="https://www.adafruit.com/product/823">OLED character display</a></li>
                                <li>2 x Switch</li>
                                <li>1 x Fancy potentiometer</li>
                                <li>Many wires</li>
                            </ul>
                        </Collapsible>
                    </>)}
                    badge="Microcontroller"
                    type="hardware">
                    <div width="500">
                        <iframe width={window.innerWidth - 60} height="315" src="https://www.youtube.com/embed/yeQi-s0GgDw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </ProjectHeadline>
                {/* Lindia */}
                <ProjectHeadline
                    name={(
                        <span>
                            <span className="project-heading">
                                Lindia
                            </span>
                        </span>
                    )}
                    items={[
                        { mediaSrc: lindia_base_r, caption: 'Base R graphics'},
                        { mediaSrc: lindia_ggplot, caption: "Lindia's output using gg_diagnose( )"}
                    ]}
                    badge="R package"
                    type="software"
                    description={(<>
                        What does lindia mean, you ask? It stands for LINear DIAgnostics. 
                        <br /><br />
                        Once a Statistics major, I worked with statistical models a lot. To successfully apply the linear regression model, I had to 
                        check that the model's assumptions hold on a dataset. This was when I realized that R (a programming language for data analysis) 
                        provides poor support for these diagnostics. The base plots generated are hard to manipulate and incomprehensive, so I created this package 
                        where I only needed to call one function to make a set of diagnostics. Lindia was a time-saver, and comes with great graphics too.
                    </>)}
                    btnText="README on Github"
                    btnLink="https://github.com/yeukyul/lindia"
                    />
                <ProjectHeadline 
                    name={(
                        <span>
                            <span className="project-heading">{"CMU Eval"}</span>
                        </span>
                    )}
                    items={[
                        { mediaSrc: cmu_landing, caption: 'CMU Eval: Landing page', border: true},
                        { mediaSrc: cmu_course, caption: 'After selecting a course, relevant statistics will appear.', border: true},
                        { mediaSrc: cmu_compare, caption: "If 1+ courses are selected, statistics are compared side by side.", border: true},
                        { mediaSrc: cmu_planning, caption: "CMU Eval has a course planning feature. After selecting the course, the hours per week and units carried will be tallied up, so we know what we're getting into.", border: true},
                        { mediaSrc: cmu_r, caption: 'Out first iteration of CMU Eval, built with Shiny in R.'},
                        { mediaSrc: cmu_original, caption: 'Original course evaluation result page.'}
                    ]}
                    badge="Web app"
                    type="software"
                    description={(
                        <>
                            During my college years, one of my biggest challenge was choosing the right courses.
                            How do I know if a professor is good at teaching? How do I know if an elective's workload won't leave me crying? 
                            <br /><br />
                            The only way to answer these questions was this giant tabulated course evaluation data (see slideshow). With 10k+ entry rows, it was almost impossible to use.
                            <br/><br/>
                            Eventually, my friends and I built this app to visualize the course evaluation data, and it helped us planned our schedule. You're not missed, giant tables.
                        </>
                    )} />
                <ProjectHeadline 
                    name={(
                        <span>
                            <span className="project-heading">{"Automaton"}</span>
                        </span>
                    )}
                    items={[
                        { mediaSrc: automaton_demo, caption: ''},
                        { mediaSrc: automaton_v1, caption: 'The earliest cardboard prototype to test the mechanism'},
                        { mediaSrc: automaton_v2, caption: 'The second iteration'},
                        { mediaSrc: automaton_v3, caption: 'Our finalized design for the swan'},
                        { mediaSrc: automaton_mechanism, caption: 'Testing the swan with the underlying mechanism'},
                        { mediaSrc: automaton_bird, caption: 'Making sure the swan is as flexible as possible'},
                        { mediaSrc: automaton_inside, caption: 'Final mechaism that supported the automaton'}
                    ]}
                    badge="simple machine"
                    type="hardware"
                    description={(
                        <>
                            Powered by a single hand crank, automatons are self-operating machines that ancient clockmakers made to showcase their handiwork.
                            Few years ago, I came across <a href="https://www.youtube.com/watch?v=Eq_avqnzj1s&ab_channel=kazuakiharada">Kazuaki Harada's automaton</a> and absolutely loved how whimsical and fun they are. 
                            <br/><br/>
                            Here's my first automaton, inspired by the hunting scene in Swan Lake.  
                        </>)
                    } />
                <ProjectHeadline 
                    name={(
                        <span>
                            <span className="project-heading">{"Savage bot"}</span>
                        </span>
                    )}
                    items={[
                        { mediaSrc: savage_home, caption: ''},
                        { mediaSrc: savage_demo, caption: ''}
                    ]}
                    badge="Web app"
                    type="software"
                    description={(
                        <>
                            As a regular Reddit user, my favorite sub-reddit is r/RoastMe. You post your picture there and, well, get roasted.
                            I was wondering if I could make a bot to automate roasts, so my friends and I made this prototype. Needless to say, it isn't very nice.
                        </>)
                    } />
                <ProjectHeadline 
                        name={(
                        <span>
                            <span className="project-heading">{"Easel"}</span>
                        </span>
                    )}
                    items={[
                        { mediaSrc: easel_home, caption: 'Landing page', border: true},
                        { mediaSrc: easel_signup, caption: 'Signup page', border: true},
                        { mediaSrc: easel_editor, caption: 'Site editor'},
                        { mediaSrc: easel_style, caption: "Easel's style guide", border: true},
                        { mediaSrc: easel_demo, caption: "Demo: using the site editor to edit pages and publish them."}
                    ]}
                    badge="Web app"
                    type="software"
                    description={(<>
                        Easel is SquareSpace but for artists. You can manage your static assets and add pages easily to create your portfolio.
                    </>)} />
                <ProjectHeadline 
                    name={(
                        <span>
                            <span className="project-heading">{"Grumblr"}</span>
                        </span>
                    )}
                    items={[
                        { mediaSrc: grumblr_signin, caption: 'Sign in page', border: true},
                        { mediaSrc: grumblr_stream, caption: 'Feed', border: true},
                        { mediaSrc: grumblr_profile, caption: 'Profile page', border: true},
                        { mediaSrc: grumblr_style, caption: 'Style guide', border: true}
                    ]}
                    badge="Web app"
                    type="software"
                    description={(
                        <>
                            Grumblr was one of the earliest web apps I've ever built. Yes, it was a programming assignment and was like instagram in every way. But I loved creating the designs
                             and thinking about how our social media can have more personality. And hey, the app works. 
                        </>)
                    } />
            {/* </Animated> */}
        </>
    );
}