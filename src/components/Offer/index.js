import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Offer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="offer-area offer-bg">
                <div className="offer-fluid">
                    <div className="container-fluid">
                        <div className="row offer-content">
                            <div className="col-md-4 col-sm-12 col-xs-12 no-padding-lr p-t-120">
                                <div className="offer-quote">
                                    <blockquote className="opr-block">
                                        <p className="quote__para">
                                            Are you a candidate willing to crack its next job interview with a unique new AI powered tool? 
                                        </p>
                                        <p className="quote__para">
                                            Are you a company willing to automatize its job screening process with the World’s first tailored AI job interviewing app?
                                        </p>
                                        <p className="quote__para">
                                            Learn more!
                                        </p>
                                        <a href="/candidate" className="quote__link">
                                            Candidate
                                        </a>
                                        <a href="/company" className="quote__link">
                                            Company
                                        </a>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12 offer-list-box">
                                <div className="offer-list">
                                    <div className="avivon-heading">
                                        <h2 className="avivon__title">
                                        Discover the first World tailored and AI Powered job screening application</h2>
                                    </div>
                                    <div className="offer-item clearfix">
                                        <div className="same-offer">
                                            <div className="offer__icon">
                                                <span className="fontello icon-human-resources"></span>
                                            </div>
                                            <div className="offer__title">
                                                <h3>About Us</h3>
                                            </div>
                                            <div className="offer__des">
                                                <p>sed quia lipsum dolor sit atur adipiscing elit is
                                                    nunc quis tellus sed ligula porta ultricies
                                                    quis nec nec magna neulla.
                                                </p>
                                            </div>
                                            <div className="offer__btn">
                                                <a href="/about" className="offer__btn-btn">
                                                    read more <span className="fontello icon-angle-double-right"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="same-offer">
                                            <div className="offer__icon">
                                                <span className="fontello icon-exploration"></span>
                                            </div>
                                            <div className="offer__title">
                                                <h3>Artificial Intelligence interviewing tool</h3>
                                            </div>
                                            <div className="offer__des">
                                                <p>sed quia lipsum dolor sit atur adipiscing elit is
                                                    nunc quis tellus sed ligula porta ultricies
                                                    quis nec nec magna neulla.
                                                </p>
                                            </div>
                                            <div className="offer__btn">
                                                <a href="/services" className="offer__btn-btn">
                                                    read more <span className="fontello icon-angle-double-right"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Offer;