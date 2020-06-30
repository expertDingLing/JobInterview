import React, { Component } from "react";
import { Link } from 'react-router-dom';

class OfficeCarousel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="ofc-caoursel-area area-padding">
                <div className="ofc-caoursel-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 primary-padding-2 text-center">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title six__title">offices near you</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 no-padding-lr">
                                <div className="office-list">
                                    <swiper :options="swiperOptions">
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">austin</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                22 Texas West Hills
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">boston</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                5 Federal Street Boston
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">new york</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                8th Broklyn New York
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">baltimore</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                3 Lombabr 50 baltimore
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">austin</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                22 Texas West Hills
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">boston</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                5 Federal Street Boston
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">new york</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                8th Broklyn New York
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">baltimore</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                3 Lombabr 50 baltimore
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">austin</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                22 Texas West Hills
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">boston</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                5 Federal Street Boston
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">new york</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                8th Broklyn New York
                                                needhelp@avivon.com
                                                888 999 0000</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__name">
                                            <h3 className="office__name-title">baltimore</h3>
                                        </div>
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                3 Lombabr 50 baltimore
                                                needhelp@avivon.com
                                                888 999 0000</p>
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

export default OfficeCarousel;