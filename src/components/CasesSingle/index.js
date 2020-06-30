import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CasesSingle extends Component {
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
                                <div className="single-content">
                                    <div className="avivon-heading">
                                        <h2 className="avivon__title">financial marketing advice</h2>
                                        <p className="avivon__desc mt-30px mb-40px">
                                            need something changed or is there something not quite working the way you envisaged?
                                            Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy
                                            text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown printer took a galley
                                            of type and scrambled it to make a type specimen book. It has survived not only
                                            five centuries,
                                            but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </div>
                                    <div className="single__img mb-50px">
                                        <img src="/images/think-img6.jpg" alt="service image" className="img-single"/>
                                    </div>
                                    <div className="avivon-heading">
                                        <h2 className="avivon__title">business challenge</h2>
                                        <p className="avivon__desc singlecases__desc mt-30px mb-70px">
                                            need something changed or is there something not quite working the way you envisaged?
                                            Is your van a little old and tired and need refreshing? Lorem Ipsum is simply
                                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the 1500s, when an unknown printer took
                                            a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                            but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </div>
                                    <div className="single__case">
                                        <div className="single__case-content singlecases__cont mb-70px">
                                            <span className="fontello icon-exploration case-icon"></span>
                                            <h3 className="single__case-title__title mt-30px mb-30px">
                                                attract and retain quality high paying  customers</h3>
                                            <p className="single__case-desc__desc">
                                                lorem Ipsum has been the industry's standard dummy text ever since the when
                                                an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book has survived not only five centuries.
                                            </p>
                                        </div>
                                        <div className="single__case-content mb-60px theme-btb pb-50px">
                                            <span className="fontello icon-human-resources case-icon"></span>
                                            <h3 className="single__case-title__title mt-30px mb-30px">
                                                strong business plan requires experience</h3>
                                            <p className="single__case-desc__desc">
                                                lorem Ipsum has been the industry's standard dummy text ever since the when
                                                an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book has survived not only five centuries.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="avivon-heading theme-btb">
                                        <h2 className="avivon__title">our solutions</h2>
                                        <p className="avivon__desc mt-25px mb-50px">
                                            need something changed or is there something not quite working the way you envisaged?
                                            Is your van a little old and tired and need refreshing? Lorem Ipsum is simply
                                            dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the 1500s, when an unknown printer took
                                            a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                            but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </div>
                                    <div className="single__img clearfix mt-60px">
                                        <div className="avivon-heading single__service chart__title">
                                            <h2 className="avivon__title">final result</h2>
                                            <p className="avivon__desc singlecases__desc2 mt-25px mb-30px">
                                                lorem Ipsum has been the industry's standard
                                                dummy text ever since the when an unknown
                                                printer took a galley.
                                            </p>
                                            <p className="avivon__desc singlecases__desc2 mb-30px">
                                                type and scrambled it to make a type specimen book.
                                            </p>
                                            <p className="avivon__desc">
                                                It has survived not only five centuries but
                                                also the leap into electronic typesetting
                                                remaining essentially unchanged.
                                            </p>
                                        </div>
                                        <div className="single__chart line__chart">
                                            <canvas id="result-chart" height="250"></canvas>
                                            <div className="line-legend">
                                                <ul className="chart-legend">
                                                    <li><span className="legend__four"></span>one</li>
                                                    <li><span className="legend__five"></span>two</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="side-bar">
                                    <div className="side__shared case__shared mb-30px">
                                        <h3 className="side__bar-title">our cases</h3>
                                        <ul className="side__bar-links">
                                            <li>
                                                <a href="#">financial marketing advice</a>
                                            </li>
                                            <li>
                                                <a href="#">substantial business growth</a>
                                            </li>
                                            <li>
                                                <a href="#">research beyong the business</a>
                                            </li>
                                            <li>
                                                <a href="#">top notch consultant provider</a>
                                            </li>
                                            <li>
                                                <a href="#">build digital campaigns brand</a>
                                            </li>
                                            <li>
                                                <a href="#">businesses large & small</a>
                                            </li>
                                            <li>
                                                <a href="#">quality of graphics design</a>
                                            </li>
                                            <li>
                                                <a href="#">mission to create a future</a>
                                            </li>
                                            <li>
                                                <a href="#">technology creates jobs</a>
                                            </li>
                                        </ul>
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

export default CasesSingle;