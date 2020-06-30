import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="footer-area responsive-content theme-bg-dark">
                <div className="footer-fluid">
                    <div className="container">
                        <div className="row footer-list">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="footer-shared rpd-content">
                                    <div className="footer__title">
                                        <h3 className="footer__title-title">our address</h3>
                                    </div>
                                    <div className="ftp__links">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fas fa-phone-square"></i> 888 999 0000</a>
                                            </li>
                                            <li>
                                                <a href="mailto:manager@mockrabbit.com"><i className="fas fa-envelope"></i>
                                                    manager@mockrabbit.com</a>
                                            </li>
                                            <li>
                                                <p className="add__para-desc"><i className="fas fa-map"></i> 855 road, broklyn street,</p>
                                                <p className="add__para-desc">new york 600</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-shared">
                                    <div className="footer__title">
                                        <h3 className="footer__title-title">extra links</h3>
                                    </div>
                                    <div className="ftp__links menu__links clearfix">
                                        <ul className="ftp__menu-links pull-left">
                                            <li><a href="/about-us1">about</a></li>
                                            <li><a href="#">careers</a></li>
                                            <li><a href="#">our team</a></li>
                                            <li><a href="#">approach</a></li>
                                            <li><a href="/cases1">case studies</a></li>
                                        </ul>
                                        <ul className="ftp__menu-links ftp__menu--links pull-left">
                                            <li><a href="/service1">services</a></li>
                                            <li><a href="#">locations</a></li>
                                            <li><a href="#">clients</a></li>
                                            <li><a href="#">help</a></li>
                                            <li><a href="/contact">contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-6 col-xs-12">
                                <div className="footer-shared">
                                    <div className="footer__title">
                                        <h3 className="footer__title-title">sign up for email alerts</h3>
                                    </div>
                                    <div className="ftp__links">
                                        <div className="ftp__form-subs">
                                            <p className="ftp__links-desc__desc">subscribe for latest articles and resources</p>
                                            <form action="#">
                                                <input type="email" placeholder="enter email"/>
                                                <button className="email__subscriber-btn"><i className="fas fa-envelope"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-shared">
                                    <div className="col-md-8 no-padding-lr">
                                        <p className="copy__desc">&copy;Copyrights @ 2020,  <a href="mailto:layerdrops@gmail.com">Screenle</a></p>
                                    </div>
                                    {/* <div className="col-md-4 text-right no-padding-lr">
                                        <ul className="copy__links">
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer;