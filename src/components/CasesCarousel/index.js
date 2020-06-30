import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CasesCarousel extends Component {
    constructor(props) {
        super(props);
    }    

    render() {
        let swiperOptions;
        return (
            <section className="ofc-caoursel-area recent-area area-padding theme-bg-gray">
                <div className="ofc-caoursel-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding-3 text-center">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title">recent cases</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="office-list">

                                    <swiper :options="swiperOptions">
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <span className="office__desc-top">risk management</span>
                                            <h3 className="office__name-title">
                                                <a href="/single-cases">
                                                    financial
                                                    marketing
                                                    advice.
                                                </a>
                                            </h3>
                                            <span className="fontello icon-exploration"></span>
                                        </div>
                                        <div className="recent__img recent__bg"></div>
                                        <div className="recent__btn">
                                            <a href="/single-cases" className="recent__btn-btn">
                                                read more
                                                <span className="fontello icon-angle-double-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <span className="office__desc-top">thought leadership</span>
                                            <h3 className="office__name-title">
                                                <a href="/single-cases">
                                                    substantial
                                                    business
                                                    growth.
                                                </a>
                                            </h3>
                                            <span className="fontello icon-achievement"></span>
                                        </div>
                                        <div className="recent__img recent__bg-2"></div>
                                        <div className="recent__btn">
                                            <a href="/single-cases" className="recent__btn-btn">
                                                read more
                                                <span className="fontello icon-angle-double-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <span className="office__desc-top">extra brilliant</span>
                                            <h3 className="office__name-title">
                                                <a href="/single-cases">
                                                    top-notch
                                                    consultation
                                                    provider.
                                                </a>
                                            </h3>
                                            <span className="fontello icon-megaphone"></span>
                                        </div>
                                        <div className="recent__img recent__bg-3"></div>
                                        <div className="recent__btn">
                                            <a href="/single-cases" className="recent__btn-btn">
                                                read more
                                                <span className="fontello icon-angle-double-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <span className="office__desc-top">business strategy</span>
                                            <h3 className="office__name-title">
                                                <a href="/single-cases">
                                                    research
                                                    beyond the
                                                    business.
                                                </a>
                                            </h3>
                                            <span className="fontello icon-knowledge"></span>
                                        </div>
                                        <div className="recent__img recent__bg-4"></div>
                                        <div className="recent__btn">
                                            <a href="/single-cases" className="recent__btn-btn">
                                                read more
                                                <span className="fontello icon-angle-double-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>

                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <span className="office__desc-top">risk management</span>
                                            <h3 className="office__name-title">
                                                <a href="/single-cases">
                                                    financial
                                                    marketing
                                                    advice.
                                                </a>
                                            </h3>
                                            <span className="fontello icon-exploration"></span>
                                        </div>
                                        <div className="recent__img recent__bg"></div>
                                        <div className="recent__btn">
                                            <a href="/single-cases" className="recent__btn-btn">
                                                read more
                                                <span className="fontello icon-angle-double-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <span className="office__desc-top">thought leadership</span>
                                            <h3 className="office__name-title">
                                                <a href="/single-cases">
                                                    substantial
                                                    business
                                                    growth.
                                                </a>
                                            </h3>
                                            <span className="fontello icon-achievement"></span>
                                        </div>
                                        <div className="recent__img recent__bg-2"></div>
                                        <div className="recent__btn">
                                            <a href="/single-cases" className="recent__btn-btn">
                                                read more
                                                <span className="fontello icon-angle-double-right"></span>
                                            </a>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    </swiper>
                                    <div className="swiper-pagination owl-dots" slot="pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CasesCarousel;