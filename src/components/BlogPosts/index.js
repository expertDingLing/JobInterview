import React, { Component } from "react";
import { Link } from 'react-router-dom';

class BlogPosts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section className="blog-area responsive-content area-padding text-left">
            <div className="blog-fluid">
                <div className="container">
                    <div className="row service-box blog-box mb-50px">
                        <div className="col-md-4">
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
                                            <nuxt-link to="/single-blog">
                                                many important brands have given us their trust.
                                            </nuxt-link>
                                        </h3>
                                    </div>
                                    <div className="service__desc mb-35px">
                                        <p className="service__desc-desc">
                                            sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                                        </p>
                                    </div>
                                    <div className="service__more">
                                        <nuxt-link to="/single-blog" className="service__more-btn">
                                            read more <span className="fontello icon-angle-double-right"></span>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
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
                                            <nuxt-link to="/single-blog">
                                                what you do today can improve all your tomorrows.
                                            </nuxt-link>
                                        </h3>
                                    </div>
                                    <div className="service__desc mb-35px">
                                        <p className="service__desc-desc">
                                            sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                                        </p>
                                    </div>
                                    <div className="service__more">
                                        <nuxt-link to="/single-blog" className="service__more-btn">
                                            read more <span className="fontello icon-angle-double-right"></span>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
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
                                            <nuxt-link to="/single-blog">
                                                money markets rates findings
                                                the best accounts
                                            </nuxt-link>
                                        </h3>
                                    </div>
                                    <div className="service__desc mb-35px">
                                        <p className="service__desc-desc">
                                            sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                                        </p>
                                    </div>
                                    <div className="service__more">
                                        <nuxt-link to="/single-blog" className="service__more-btn">
                                            read more <span className="fontello icon-angle-double-right"></span>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row service-box blog-box">
                        <div className="col-md-4">
                            <div className="shared-service">
                                <div className="shared__img">
                                    <img src="/images/blog7.jpg" alt="blog image"/>
                                    <div className="shared__date-item">
                                        <span>19</span>
                                        <span>jun</span>
                                    </div>
                                </div>
                                <div className="shared-content">
                                    <div className="service__title mb-30px">
                                        <h3 className="service__title-title">
                                            <nuxt-link to="/single-blog">
                                                future where technology creates good jobs.
                                            </nuxt-link>
                                        </h3>
                                    </div>
                                    <div className="service__desc mb-35px">
                                        <p className="service__desc-desc">
                                            sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                                        </p>
                                    </div>
                                    <div className="service__more">
                                        <nuxt-link to="/single-blog" className="service__more-btn">
                                            read more <span className="fontello icon-angle-double-right"></span>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shared-service">
                                <div className="shared__img">
                                    <img src="/images/blog8.jpg" alt="blog image"/>
                                    <div className="shared__date-item">
                                        <span>15</span>
                                        <span>jun</span>
                                    </div>
                                </div>
                                <div className="shared-content">
                                    <div className="service__title mb-30px">
                                        <h3 className="service__title-title">
                                            <nuxt-link to="/single-blog">
                                                we can give you both graphic
                                                & technical quality.
                                            </nuxt-link>
                                        </h3>
                                    </div>
                                    <div className="service__desc mb-35px">
                                        <p className="service__desc-desc">
                                            sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                                        </p>
                                    </div>
                                    <div className="service__more">
                                        <nuxt-link to="/single-blog" className="service__more-btn">
                                            read more <span className="fontello icon-angle-double-right"></span>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shared-service rpl-content">
                                <div className="shared__img">
                                    <img src="/images/blog9.jpg" alt="blog image"/>
                                    <div className="shared__date-item">
                                        <span>05</span>
                                        <span>jun</span>
                                    </div>
                                </div>
                                <div className="shared-content">
                                    <div className="service__title mb-30px">
                                        <h3 className="service__title-title">
                                            <nuxt-link to="/single-blog">
                                                create design & build brands, campaigns & digital.
                                            </nuxt-link>
                                        </h3>
                                    </div>
                                    <div className="service__desc mb-35px">
                                        <p className="service__desc-desc">
                                            sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                                        </p>
                                    </div>
                                    <div className="service__more">
                                        <nuxt-link to="/single-blog" className="service__more-btn">
                                            read more <span className="fontello icon-angle-double-right"></span>
                                        </nuxt-link>
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

export default BlogPosts;