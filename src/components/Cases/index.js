import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Cases extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="blog-area responsive-content area-padding">
                <div className="blog-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding-2 text-center">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title eight__title">business planning &amp; strategy</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row service-box blog-box blog--box text-left">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="shared-service mission-service">
                                    <div className="shared__img">
                                        <img src="/images/blog4.jpg" alt="blog image"/>
                                    </div>
                                    <div className="shared-content">
                                        <div className="service__title mb-30px">
                                            <h3 className="service__title-title">
                                                <a href="/single-cases">take a look around business growth</a>
                                            </h3>
                                        </div>
                                        <div className="service__desc">
                                            <p className="service__desc-desc">
                                                sed quia magni dolores eos qui ratione voluptatem sequi
                                                nesciunt eque porro
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="shared-service mission-service">
                                    <div className="shared__img">
                                        <img src="/images/blog5.jpg" alt="blog image"/>
                                    </div>
                                    <div className="shared-content">
                                        <div className="service__title mb-30px">
                                            <h3 className="service__title-title">
                                                <a href="/single-cases">find out why should you choose us</a>
                                            </h3>
                                        </div>
                                        <div className="service__desc">
                                            <p className="service__desc-desc">
                                                sed quia magni dolores eos qui ratione voluptatem sequi
                                                nesciunt eque porro
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0">
                                <div className="shared-service rpl-content mission-service">
                                    <div className="shared__img">
                                        <img src="/images/blog6.jpg" alt="blog image"/>
                                    </div>
                                    <div className="shared-content">
                                        <div className="service__title mb-30px">
                                            <h3 className="service__title-title">
                                                <a href="/single-cases">finance advice and global solutions</a>
                                            </h3>
                                        </div>
                                        <div className="service__desc">
                                            <p className="service__desc-desc">
                                                sed quia magni dolores eos qui ratione voluptatem sequi
                                                nesciunt eque porro
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

export default Cases;