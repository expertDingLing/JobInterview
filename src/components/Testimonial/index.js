import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Testimonial extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="ofc-caoursel-area res-testi-area teatimonial-area area-padding">
                <div className="ofc-caoursel-fluid">
                    <div className="container-fluid no-padding-lr">
                        <div className="row">
                            <div className="col-md-12 primary-padding-3 text-center">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title">testimonials</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="testimonial-list">
                                    <swiper :options="swiperOptions">
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, iste soluta, odit sapiente volup.
                                            </p>
                                        </div>
                                        <div className="office__name">
                                            <div className="testi__img-img testi__bg-1"></div>
                                            <h3 className="office__name-title">bernice pease</h3>
                                            <span className="office__name-span">manager</span>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aut, commodi architecto delectus!
                                            </p>
                                        </div>
                                        <div className="office__name">
                                            <div className="testi__img-img testi__bg-2"></div>
                                            <h3 className="office__name-title">mike hardson</h3>
                                            <span className="office__name-span">director</span>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolore modi rem omnis esse suscipit.
                                            </p>
                                        </div>
                                        <div className="office__name">
                                            <div className="testi__img-img testi__bg-3"></div>
                                            <h3 className="office__name-title">jessica brown</h3>
                                            <span className="office__name-span">founder</span>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quia, iste? Alias consequuntur repellendus.
                                            </p>
                                        </div>
                                        <div className="office__name">
                                            <div className="testi__img-img testi__bg-4"></div>
                                            <h3 className="office__name-title">kevin martin</h3>
                                            <span className="office__name-span">marketing</span>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat itaque voluptate ullam ad quidem minima.
                                            </p>
                                        </div>
                                        <div className="office__name">
                                            <div className="testi__img-img testi__bg-4"></div>
                                            <h3 className="office__name-title">daniel ward</h3>
                                            <span className="office__name-span">officer</span>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptas rem cupiditate, quae, et ad!
                                            </p>
                                        </div>
                                        <div className="office__name">
                                            <div className="testi__img-img testi__bg-1"></div>
                                            <h3 className="office__name-title">bernice pease</h3>
                                            <span className="office__name-span">manager</span>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="office-list-item">
                                        <div className="office__desc">
                                            <p className="office__desc-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad maxime accusantium voluptatum?
                                            </p>
                                        </div>
                                        <div className="office__name">
                                            <div className="testi__img-img testi__bg-2"></div>
                                            <h3 className="office__name-title">mike hardson</h3>
                                            <span className="office__name-span">director</span>
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

export default Testimonial;