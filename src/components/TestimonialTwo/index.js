import React, { Component } from "react";
import { Link } from 'react-router-dom';

class TestimonialTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="trusted-area blockquote-area avivon-pb text-center">
                <div className="trusted-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="trusted-content quote-slide avivon-pt">
        
                                <swiper :options="swiperOptions">
                                <swiper-slide>
        
                                    <div className="ts-item">
                                        <div className="trusted__icon mb-50px">
                                            <span className="block__symbol">“</span>
                                        </div>
                                        <div className="trusted__title">
                                            <h2 className="trusted__title-title">
                                                “this is due to their excellent service, competitive
                                                pricing and customer support.
                                                It’s throughly refresing to get such a personal touch.”
                                            </h2>
                                            <p className="trusted__desc-desc mt-35px"><span>shirley smith </span>/ avivon founder</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                    <swiper-slide>
                                    <div className="ts-item">
                                        <div className="trusted__icon mb-50px">
                                            <span className="block__symbol">“</span>
                                        </div>
                                        <div className="trusted__title">
                                            <h2 className="trusted__title-title">
                                                “there are many variations of passages of lorem ispsum available but the majority
                                                have suffered alteration don't look even slightly believable.”
                                            </h2>
                                            <p className="trusted__desc-desc mt-35px"><span>shirley smith </span>/ avivon founder</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="ts-item">
                                        <div className="trusted__icon mb-50px">
                                            <span className="block__symbol">“</span>
                                        </div>
                                        <div className="trusted__title">
                                            <h2 className="trusted__title-title">
                                                “there are many variations of passages of lorem ispsum available but the majority
                                                have suffered alteration don't look even slightly believable.”
                                            </h2>
                                            <p className="trusted__desc-desc mt-35px"><span>shirley smith </span>/ avivon founder</p>
                                        </div>
                                    </div>
                                    </swiper-slide>
                                </swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default TestimonialTwo;