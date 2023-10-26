import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo1 from '../assets/images/portfolioimg1.jpg';
import Photo2 from '../assets/images/portfolioimg2.jpg';
import CatWaving from '../assets/images/catwaving.gif';
import PusheenGif from '../assets/images/pusheen.gif';
import Wishfor from '../assets/images/wishfor_landing_page.png';
import RBG from '../assets/images/RBG-login.png';
import MailGif from '../assets/images/mail.gif';

const WelcomePage = () => {
    return (
        <div id="top">
            <div className="main-img-container">
                <nav className="navbar">
                    <div className="logo"><h1>RB</h1></div>
                    <div className="nav-items">
                        <ul className="d-flex flex-row">
                            <li className="navitem"><a className="hover-underline-animation" href="#aboutsection">About</a></li>
                            <li className="navitem"><a className="hover-underline-animation" href="#projects">Projects</a></li>
                            <li className="navitem"><a className="hover-underline-animation" href="#skills">Skills</a></li>
                            <li className="navitem"><a className="hover-underline-animation" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <h1 className="firstname">Rheanne</h1>
                <h1 className="lastname">Bande</h1>
                <h1 className="specialty1">Front-End Developer</h1>
                <h1 className="specialty2">Software QA</h1>
                <img src={Photo1} alt="main image" className="image1"/>
            </div>
            <section className="about-section" id="aboutsection">
                <div>
                    <img src={Photo2} alt="image of me" className="image2"></img>
                </div>
                <div className="bio-container">
                    <div className="d-flex flex-row align-items-center">
                        <img className="cat-gif" src={CatWaving}></img>
                        <h1 id="about">About Me</h1>
                    </div>
                    <p className="bio-subheader text-secondary">San Francisco Bay Area, CA | she/her </p>
                    <div className="bio-section">
                        <p>
                            My name is Rheanne. I am a former Medical Assistant turned Software Developer specializing in <span className="emphasize">Front End Development</span> and <span className="emphasize">Software QA</span>.
                            Growing up, I have always enjoyed designing my own websites through Wix, an intuitive html design website builder. I also grew up as a passionate gamer that loved to find ways how to break the game and escape out of levels! 
                            I have always had a passion for technology but decided to pursue a career in the medical field due to my passion for providing high-quality patient care and making a positive impact within the community.
                        </p>
                        <p>
                            Fast forwarding to the present, I made the decision to reignite my passion for technology and took the self-taught route where I fell in love with all things programming! I made the commitment of joining Coding Dojo, an accelerated coding bootcamp, where they provided me with the resources to learn the foundations of becoming a Software Developer and have been continuing my education alongside strengthening my skills which has been a challenging yet rewarding experience.
                        </p>
                        <p>
                            When I'm not coding, I enjoy traveling, hiking, bowling, playing with my pets (proud parent of 1 cat & a blue tongue skink!), crocheting as well as playing video games.
                        </p>
                    </div>
                </div>
            </section>
            <section id="skills" className="skills-section">
                <h1 className="tech-header text-white">Technologies</h1>
                <p className="tech-subheader">TOP SKILLS - HTML | CSS | JavaScript | Python | Postman | SQL | APIs </p>
                <div className="tech-icons grid gap-2 d-flex">
                    <div className="p-2 g-col-6"><i className="devicon-git-plain"></i></div>
                    <div className="p-2 g-col-6"><i className="devicon-github-original"></i></div>
                    <div className="p-2 g-col-6"><i className="devicon-flask-original"></i></div>
                    <div className="p-2 g-col-6"><i className="devicon-bootstrap-plain"></i></div>
                    <div className="p-2 g-col-6"><i className="devicon-react-original"></i></div>
                    <div className="p-2 g-col-6"><i className="devicon-express-original"></i></div>  
                    <div className="p-2 g-col-6"><i className="devicon-nodejs-plain"></i></div>
                    <div className="p-2 g-col-6"><i className="devicon-ruby-plain"></i></div>
                    <div className="p-2 g-col-6"><i className="devicon-rspec-original"></i></div>
                </div>
            </section>
            <section id="projects">
                <div className="projects-header d-flex">
                    <h1 className="projects-title">Projects</h1>
                    <img src={PusheenGif} alt="pusheen gif" className="pusheen-gif"></img>
                </div>
                <div className="projects-container d-flex flex-column align-items-center">
                    <div className="project d-flex flex-row">
                        <div>
                            <a href="https://github.com/Rhemb/wishfor__" target="_blank" rel="noopener noreferrer"><img src={Wishfor} className="proj-img d-block" alt="Wishfor Project Image" /></a>
                        </div>
                        <div className="project-desc-container1">
                            <h1 className="project-title d-none d-md-block">Wishfor__</h1>
                            <p className="project-subheader d-none d-md-block">Create React App | MERN | Postman | Bootstrap</p>
                            <p className="project-desc d-none d-md-block">Everything you wish for, all in one place.</p>
                        </div>
                    </div>
                    <div className="project d-flex flex-row">
                        <div className="project-desc-container2">
                            <h1 className="project-title d-none d-md-block">RBG</h1>
                            <p className="project-subheader d-none d-md-block ">Vite | MERN | Postman | Bootstrap</p>
                            <p className="project-desc d-none d-md-block">Real Reviews, by Gamers like You.</p>
                        </div>
                        <div>
                            <a href="https://github.com/Rhemb/RBG-reviews" target="_blank" rel="noopener noreferrer"><img src={RBG} className="proj-img d-block" alt="Wishfor Project Image" /></a>
                        </div>
                    </div>
                </div> 
            </section>
            <section id="contact">
                <div className="contact-left">
                    <div className="contact-title-container d-flex flex-row">
                        <h1 className="contact-header">Contact</h1>
                        {/* GIF Sourced via Giphy */}
                        <img className="mail-gif" src={MailGif} alt="mail gif"></img>
                    </div>
                    <div className="contact-container">
                        <h3 className="contact-subhead">Thanks for taking the time to get to know me!</h3>
                        <p className="contact-text">Please feel free to connect with me through my socials or send me an email if you are interested in chatting!</p>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="icon-container d-flex justify-content-center">
                        <ul className="d-flex flex-row">
                            <li>
                                <a href="https://www.linkedin.com/in/rheanne-bande/" target="_blank" rel="noopener noreferrer"><i class="linked-in devicon-linkedin-plain"></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/Rhemb" target="_blank" rel="noopener noreferrer"><i class="git-hub devicon-github-original"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <a className="email-link mb-3" href = "mailto: rheanne.bande@gmail.com">send me an email here!</a>
                        <p>♡♡♡</p>
                    </div>
                </div>
            </section>
            <footer className="text-center text-secondary">
                <a href="#top" className="text-secondary">Back to the top</a>
                <p>built and designed by Rheanne Bande</p>
            </footer>
        </div>
    )
}

export default WelcomePage;