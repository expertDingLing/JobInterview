import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ServiceTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="service-area responsive-content service--area area-padding">
                <div className="service-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding-3 text-center">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title">recent cases</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row service-box">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="shared-service">
                                    <div className="shared__img">
                                        <img src="/images/service11.jpg" alt="service image"/>
                                        <div className="shared-content">
                                            <div className="service__desc mb-20px">
                                                <p className="service__desc-desc">
                                                    thought leadership
                                                </p>
                                            </div>
                                            <div className="service__title">
                                                <a href="/single-cases">
                                                    <h3 className="service__title-title">substantial business growth.</h3>
                                                </a>
                                            </div>
                                            <div className="service__more text-center">
                                                <a href="/single-cases" className="service__more-btn">
                                                    <span className="fontello icon-angle-double-right"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="shared-service">
                                    <div className="shared__img">
                                        <img src="/images/service12.jpg" alt="service image"/>
                                        <div className="shared-content">
                                            <div className="service__desc mb-20px">
                                                <p className="service__desc-desc">
                                                    risk management
                                                </p>
                                            </div>
                                            <div className="service__title">
                                                <a href="/single-cases">
                                                    <h3 className="service__title-title">
                                                        financial
                                                        marketing
                                                        advice.</h3>
                                                </a>
                                            </div>
                                            <div className="service__more text-center">
                                                <a href="/single-cases" className="service__more-btn">
                                                    <span className="fontello icon-angle-double-right"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0">
                                <div className="shared-service rpl-content">
                                    <div className="shared__img">
                                        <img src="/images/service13.jpg" alt="service image"/>
                                        <div className="shared-content">
                                            <div className="service__desc mb-20px">
                                                <p className="service__desc-desc">
                                                    business strategy
                                                </p>
                                            </div>
                                            <div className="service__title">
                                                <a href="/single-cases">
                                                    <h3 className="service__title-title">
                                                        research
                                                        beyond the
                                                        business.</h3>
                                                </a>
                                            </div>
                                            <div className="service__more text-center">
                                                <a href="/single-cases" className="service__more-btn">
                                                    <span className="fontello icon-angle-double-right"></span>
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

export default ServiceTwo;