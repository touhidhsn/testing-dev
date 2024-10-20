import React from "react";
import { Link} from 'react-scroll'


const Hero = () => {
    return (
        <section className="static-hero" id='home'>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2><span>Hello,</span>
                                            I am Ronald.</h2>
                                    </div>
                                    <div data-swiper-parallax="300" className="slide-sub-title">
                                        <h5>UI/UX Designer</h5>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>Must explain to how all this mistaken idea denouncing pleasure pain
                                            the system and expound the actua.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btn"><Link className="theme-btn" to="contact" spy={true} smooth={true}  duration={500}>Hire Me</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <img src='images/slider/1.jpg' alt="" />
                        <div className="icon-1 floating-item"><img src='images/icon/photoshop.svg' alt="" /></div>
                        <div className="icon-2 floating-item"><img src='images/icon/illustrator.svg' alt="" /></div>
                        <div className="icon-3 floating-item"><img src='images/icon/diamond.svg' alt="" /></div>
                        <div className="project floating-item">
                            <div className="icon">
                                <i className="fi flaticon-verified"></i>
                            </div>
                            <div className="p-text">
                                <h3><span data-count="1500">1500</span>+</h3>
                                <p>Complete Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <svg width="1038" height="938" viewBox="0 0 1038 938" fill="none">
                    <g opacity="0.5" filter="url(#filter0_f_39_4392)">
                        <circle cx="290.5" cy="282.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4392" x="-457" y="-465" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4392" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="shape-2">
                <svg width="1295" height="938" viewBox="0 0 1295 938" fill="none">
                    <g opacity="0.4" filter="url(#filter0_f_39_4393)">
                        <circle cx="647.5" cy="561.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4393" x="0" y="-86" width="1295" height="1295"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4393" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="shape-3">
                <svg width="752" height="747" viewBox="0 0 752 747" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4394)">
                        <circle cx="647.5" cy="99.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4394" x="0" y="-548" width="1295" height="1295"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4394" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="line-shape-1">
                <img src='images/slider/line-1.png' alt="" />
            </div>
            <div className="line-shape-2">
                <img src='images/slider/line-2.png' alt="" />
            </div>
        </section>
    )
}

export default Hero;