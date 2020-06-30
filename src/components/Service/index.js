import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Service extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="service-area responsive-content extra-responsive area-padding">
                <div className="service-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding-3 text-center">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title">our services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row service-box text-center avivon-pb">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="shared-service">
                                    <div className="shared__img"><img src="/images/service1.jpg" alt="service image"/></div>
                                    <div className="shared-content">
                                        <div className="service__title mb-35px">
                                            <h3 className="service__title-title">
                                                <a href="/single-service">Candidate Mock interview</a></h3>
                                        </div>
                                        <div className="service__desc mb-25px">
                                            <p className="service__desc-desc">
                                                sed quia magni dolores eos qui ratione
                                                voluptatem sequi nesciunt eque porro.
                                            </p>
                                        </div>
                                        <div className="service__more">
                                            <a href="/service1" className="service__more-btn">
                                                <span className="fontello icon-angle-double-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="shared-service">
                                    <div className="shared__img"><img src="/images/service2.jpg" alt="service image"/></div>
                                    <div className="shared-content">
                                        <div className="service__title mb-35px">
                                            <h3 className="service__title-title">
                                                <a href="/single-service"> Company Screening process</a></h3>
                                        </div>
                                        <div className="service__desc mb-25px">
                                            <p className="service__desc-desc">
                                                sed quia magni dolores eos qui ratione
                                                voluptatem sequi nesciunt eque porro.
                                            </p>
                                        </div>
                                        <div className="service__more">
                                            <a href="/service1" className="service__more-btn">
                                                <span className="fontello icon-angle-double-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0">
                                <div className="shared-service rpl-content">
                                    <div className="shared__img"><img src="/images/service3.jpg" alt="service image"/></div>
                                    <div className="shared-content">
                                        <div className="service__title mb-35px">
                                            <h3 className="service__title-title">
                                                <a href="/single-service">Tailored interview <br/><br/></a>
                                            </h3>
                                        </div>
                                        <div className="service__desc mb-25px">
                                            <p className="service__desc-desc">
                                                sed quia magni dolores eos qui ratione
                                                voluptatem sequi nesciunt eque porro.
                                            </p>
                                        </div>
                                        <div className="service__more">
                                            <a href="/service1" className="service__more-btn">
                                                <span className="fontello icon-angle-double-right"></span>
                                            </a>
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

export default Service;