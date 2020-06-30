import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NavOne extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return (            
                <section :class="`menu-area ${sticky ? 'active' : ''}`">
                    <div className="top-menu-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="menu-full-width">
                                        <div :class="`logo-box ${sticky ? 'active' : ''}`">
                                            <div @click="mobileToggle = !mobileToggle" className="site-open">
                                                <span className="open__only"></span>
                                                <span className="open__only"></span>
                                                <span className="open__only"></span>
                                            </div>
                                            <div className="logo">
                                                <nuxt-link to="/" title="Avivon"><img src="/images/logo.png" alt="logo"></nuxt-link>
                                            </div>
                                        </div>
                                        <div className="main-menu">
                                            <nav className="menu__wrapper">
                                                <ul className="dropdown-main">
                                                    <li>
                                                        <a href="#">home</a>
                                                        <div className="main__dropdown-menu">
                                                            <ul>
                                                                <li><nuxt-link to="/">home 01</nuxt-link></li>
                                                                <li><nuxt-link to="/index2">home 02</nuxt-link></li>
                                                                <li><nuxt-link to="/index3">home 03</nuxt-link></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#">services</a>
                                                        <div className="main__dropdown-menu">
                                                            <ul>
                                                                <li><nuxt-link to="/service1">services 01</nuxt-link></li>
                                                                <li><nuxt-link to="/service2">services 02</nuxt-link></li>
                                                                <li><nuxt-link to="/single-service">single service</nuxt-link></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#">pages</a>
                                                        <div className="main__dropdown-menu">
                                                            <ul>
                                                                <li><nuxt-link to="/about-us1">about us 01</nuxt-link></li>
                                                                <li><nuxt-link to="/about-us2">about us 02</nuxt-link></li>
                                                                <li><nuxt-link to="/our-mission">our mission</nuxt-link></li>
                                                                <li><nuxt-link to="/our-history">our history</nuxt-link></li>
                                                                <li><nuxt-link to="/our-partnership">partnership</nuxt-link></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#">cases</a>
                                                        <div className="main__dropdown-menu">
                                                            <ul>
                                                                <li><nuxt-link to="/cases1">cases 01</nuxt-link></li>
                                                                <li><nuxt-link to="/cases2">cases 02</nuxt-link></li>
                                                                <li><nuxt-link to="/single-cases">single case</nuxt-link></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#">blog</a>
                                                        <div className="main__dropdown-menu">
                                                            <ul>
                                                                <li><nuxt-link to="/blog-post">blog post</nuxt-link></li>
                                                                <li><nuxt-link to="/single-blog">single blog</nuxt-link></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/contact">contact</nuxt-link>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <div className="logo-right-button">
                                                <div className="lang-dropdown">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <img src="/images/flag.jpg" alt="English"/>
                                                                english
                                                                <i className="fas fa-caret-down"></i>
                                                            </a>
                                                            <div className="lang-drop-item">
                                                                <a href="#">
                                                                    <img src="/images/flag.jpg" alt="English"/>
                                                                    english
                                                                </a>
                                                                <a href="#">
                                                                    <img src="/images/flag2.jpg" alt="Usa"/>
                                                                    usa
                                                                </a>
                                                                <a href="#">
                                                                    <img src="/images/flag3.jpg" alt="France"/>
                                                                    france
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="contact-para">
                                                    <p>+ 888 999 0000</p>
                                                    <span className="fontello icon-phone-call phone-call"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
        )
    }
}

export default NavOne;