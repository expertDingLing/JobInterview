import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Steps extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="service-area avivon-service responsive-content aivon-about area-padding">
                <div className="service-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding-2 text-center">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title">Purchase Interview Credits</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row service-box service--box">
                            <div className="col-md-3 col-sm-6 col-xs-12 masonary-item ">
                                <div className="shared-service">
                                    <div className="service__icon mb-50px">
                                        <img src="../images/avatar.png"/>
                                    </div>
                                    <div className="shared-content">
                                        <div className="service__title mb-35px">
                                            <h3 className="service__title-title">
                                                <a href="/service">10 Interview Credits<br/></a>
                                            </h3>
                                        </div>
                                        <div className="service__desc mb-25px">
                                            <p className="service__desc-desc">
                                            20 USD<br/><br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12 masonary-item ">
                                <div className="shared-service">
                                    <div className="service__icon mb-50px">
                                        <img src="../images/avatar.png"/>
                                    </div>
                                    <div className="shared-content">
                                        <div className="service__title mb-35px">
                                            <h3 className="service__title-title">
                                                <a href="/service">50 Interview Credits<br/></a>
                                            </h3>
                                        </div>
                                        <div className="service__desc mb-25px">
                                            <p className="service__desc-desc">
                                            40 USD<br/><br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12 masonary-item ">
                                <div className="shared-service">
                                    <div className="service__icon mb-50px">
                                        <img src="../images/avatar.png"/>
                                    </div>
                                    <div className="shared-content">
                                        <div className="service__title mb-35px">
                                            <h3 className="service__title-title">
                                                <a href="/service">Unlimited 1 Month<br/></a>
                                            </h3>
                                        </div>
                                        <div className="service__desc mb-25px">
                                            <p className="service__desc-desc">
                                            200 USD<br/><br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12 masonary-item ">
                                <div className="shared-service">
                                    <div className="service__icon mb-50px">
                                        <img src="../images/avatar.png"/>
                                    </div>
                                    <div className="shared-content">
                                        <div className="service__title mb-35px">
                                            <h3 className="service__title-title">
                                                <a href="/service">Unlimited 1 Year <br/></a>
                                            </h3>
                                        </div>
                                        <div className="service__desc mb-25px">
                                            <p className="service__desc-desc">
                                                2’000 USD<br/><br/>
                                            </p>
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

export default Steps;