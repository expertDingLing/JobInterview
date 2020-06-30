import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
        <div>
            <footer id="footer" className="footer-area responsive-content theme-bg-dark">
                <div className="footer-fluid">
                    <div className="container">
                        <div className="row footer-list">
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <div className="footer-shared rpd-content">
                                    <div className="footer__title">
                                        <h3 className="footer__title-title">Follow Us</h3>
                                    </div>
                                    <div className="ftp__links menu__links clearfix">
                                        <ul className="ftp__menu-links pull-left">
                                            <li className="footer_icon"><i className="fab fa-twitter"></i><a href="/about-us1">Twitter</a></li>
                                            <li className="footer_icon"><i className="fab fa-facebook-f"></i><a href="#">Facebook</a></li>
                                            <li className="footer_icon"><i className="fab fa-linkedin-in"></i><a href="#">Linkedin</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <div className="footer-shared">
                                    <div className="footer__title">
                                        <h3 className="footer__title-title">Company</h3>
                                    </div>
                                    <div className="ftp__links menu__links clearfix">
                                        <ul className="ftp__menu-links pull-left">
                                            <li><a href="/about-us1">About Us</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="/contactus">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="footer-shared">
                                    <div className="ftp__links">
                                        <div className="ftp__form-subs">
                                            <p className="ftp__links-desc__desc">Subscribe for latest articles and resources</p>
                                            <form action="#">
                                                <input type="email" placeholder="Enter email" />
                                                <button className="email__subscriber-btn"><i className="fas fa-envelope"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-shared">
                                <div className="col-md-8 no-padding-lr">
                                    <p className="copy__desc footer_center">&copy;Copyrights @ 2020,  <a href="mailto:layerdrops@gmail.com">Screenle</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="scroll-top" onClick={() => window.scrollTo(0, 0)}>
                <i className="fas fa-arrow-up" title="Go top"></i>
            </div>
        </div>
        
    )
  }
}

export default Footer;
