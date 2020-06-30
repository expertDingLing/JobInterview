import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ServiceSingle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="single-area responsive-content area-padding">
                <div className="service-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="single-content single--content">
                                    <div className="single__img mb-50px">
                                        <img src="/images/think-img4.jpg" alt="service image" className="img-single"/>
                                    </div>
                                    <div className="avivon-heading">
                                        <p className="avivon__desc audit-title mt-30px mb-40px">
                                           <a className="test" href="#">android</a>
                                        </p>
                                    </div>
                                    <div className="single__img clearfix avivon-single avivon--single">
                                        <div className="single__img-img"></div>
                                        <div className="avivon-heading">
                                            <h2 className="avivon__title">planning strategy</h2>
                                            <p className="avivon__desc mt-20px">
                                                lorem Ipsum is simply dummy text of
                                                the printing and typesetting industry.
                                            </p>
                                            <ul className="plan__list">
                                                <li><i className="fas fa-check-circle"></i> research beyond the business plan</li>
                                                <li><i className="fas fa-check-circle"></i> marketing options and rates</li>
                                                <li><i className="fas fa-check-circle"></i> the ability to turnaround consulting</li>
                                                <li><i className="fas fa-check-circle"></i> help companies into more profitable</li>
                                                <li><i className="fas fa-check-circle"></i> customer engagement matters</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single__accordion mt-60px">
                                        <div className="accordion-container">
                                            <div className="ac">
                                                <h2 className="ac-q accordion__title-text" tabIndex="0">consulting & finance reasearch</h2>
                                                <div className="ac-a accordion__content">
                                                    <p className="accordion__content-desc">lorem Ipsum is simply dummy text of not the print typesetting industry has been the industrys standard dummy. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="ac accordion__content">
                                                <h2 className="ac-q accordion__title-text" tabIndex="0">strong business plan requires experience </h2>
                                                <div className="ac-a">
                                                    <p className="accordion__content-desc">lorem Ipsum is simply dummy text of not the print typesetting industry has been the industrys standard dummy. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="ac">
                                                <h2 className="ac-q accordion__title-text" tabIndex="0">attract and retain quality high paying customers </h2>
                                                <div className="ac-a accordion__content">
                                                    <p className="accordion__content-desc">lorem Ipsum is simply dummy text of not the print typesetting industry has been the industrys standard dummy. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single__img clearfix mt-60px avivon-single">
                                        <div className="avivon-heading single__service">
                                            <h2 className="avivon__title">business analysis</h2>
                                            <p className="avivon__desc mt-20px">
                                                lorem Ipsum is simply dummy text of
                                                not the print typesetting industry has been
                                                industrys standard dummy. It has survived not
                                                only five centuries, but also the leap into electronic
                                                typesetting, remaining essentially unchanged.
                                            </p>
                                            <ul className="plan__list mt-45px">
                                                <li><i className="fas fa-check-circle"></i> research beyond the business plan</li>
                                                <li><i className="fas fa-check-circle"></i> marketing options and rates</li>
                                                <li><i className="fas fa-check-circle"></i> the ability to turnaround consulting</li>
                                                <li><i className="fas fa-check-circle"></i> help companies into more profitable</li>
                                                <li><i className="fas fa-check-circle"></i> customer engagement matters</li>
                                            </ul>
                                        </div>
                                        <div className="single__chart">
                                            <canvas id="doughutChart"></canvas>
                                            <div className="line-legend">
                                                <ul className="chart-legend">
                                                    <li><span className="legend__one"></span>one</li>
                                                    <li><span className="legend__two"></span>two</li>
                                                    <li><span className="legend__three"></span>three</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="side-bar">
                                    <div className="side__shared mb-10px">
                                        <h3 className="side__bar-title">Position</h3>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                                <option>Option 5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="side__shared mb-10px">
                                        <h3 className="side__bar-title">Select perffered number of years of experience.</h3>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-4 col-xs-4"><a className="years-btn">0-2</a></div>
                                            <div className="col-md-4 col-sm-4 col-xs-4"><a className="years-btn">2-5</a></div>
                                            <div className="col-md-4 col-sm-4 col-xs-4"><a className="years-btn">5+</a></div>
                                        </div>
                                    </div>
                                    <div className="side__shared help__shared help__bg mb-30px">
                                        <div className="avivon__help-center">
                                            <h3 className="side__bar-title__title">need avivon help?</h3>
                                            <p className="avivon__help-desc__desc">
                                                prefer speaking with a human to filling out a form?
                                                call corporate office and
                                                we will connect you with a team member who can help.</p>
                                            <h4 className="avivon__help-title__title">888 999 0000</h4>
                                        </div>
                                    </div>
                                    <div className="download__btn">
                                        <a href="#" className="download__btn-btn">
                                            download our details <span className="fontello icon-angle-double-right"></span>
                                        </a>
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

export default ServiceSingle;