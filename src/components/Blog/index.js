import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Blog extends Component {
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
                                <h2 className="avivon__title">blog posts</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row service-box blog-box text-left">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="shared-service">
                                <div className="shared__img">
                                    <img src="/images/blog1.jpg" alt="blog image"/>
                                    <div className="shared__date-item">
                                        <span>23</span>
                                        <span>jul</span>
                                    </div>
                                </div>
                                <div className="shared-content">
                                    <div className="service__title mb-30px">
                                        <h3 className="service__title-title">
                                            <a href="/single-blog">
                                                many important brands have
                                                 given us their trust.</a>
                                        </h3>
                                    </div>
                                    <div className="service__desc mb-35px">
                                        <p className="service__desc-desc">
                                            sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                                        </p>
                                    </div>
                                    <div className="service__more">
                                        <a href="/single-blog" className="service__more-btn">
                                            read more <span className="fontello icon-angle-double-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="shared-service">
                                <div className="shared__img">
                                    <img src="/images/blog2.jpg" alt="blog image"/>
                                    <div className="shared__date-item">
                                        <span>20</span>
                                        <span>jul</span>
                                    </div>
                                </div>
                                <div className="shared-content">
                                    <div className="service__title mb-30px">
                                        <h3 className="service__title-title">
                                            <a href="/single-blog">
                                                what you do today can
                                                improve all your tomorrows.
                                              </a>
                                         </h3>
                                    </div>
                                    <div className="service__desc mb-35px">
                                        <p className="service__desc-desc">
                                            sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                                        </p>
                                    </div>
                                    <div className="service__more">
                                        <a href="/single-blog" className="service__more-btn">
                                            read more <span className="fontello icon-angle-double-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-xs-offset-0">
                            <div className="shared-service rpl-content">
                                <div className="shared__img">
                                    <img src="/images/blog3.jpg" alt="blog image"/>
                                    <div className="shared__date-item">
                                        <span>08</span>
                                        <span>jul</span>
                                    </div>
                                </div>
                                <div className="shared-content">
                                    <div className="service__title mb-30px">
                                        <h3 className="service__title-title">
                                            <a href="/single-blog">
                                            money markets rates findings
                                                the best accounts
                                              </a>
                                         </h3>
                                    </div>
                                    <div className="service__desc mb-35px">
                                        <p className="service__desc-desc">
                                            sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                                        </p>
                                    </div>
                                    <div className="service__more">
                                        <a href="/single-blog" className="service__more-btn">
                                            read more <span className="fontello icon-angle-double-right"></span>
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

export default Blog;