import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ClientsLogo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="client-logo-area avivon-pt text-center">
                <div className="client-logo-fluid">
                    <div className="container">
                        <div className="row client-logo-box theme-btb avivon-pb">
                            <div className="col-md-12">
                                <div className="client-logo">

                                    <swiper :options="swiperOptions">
                                    <swiper-slide>
                                    <div className="client-logo-item">
                                        <img className="client__logo-brand" src="/images/e-logo.png" alt="client brand logo"/>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="client-logo-item">
                                        <img className="client__logo-brand" src="/images/e-logo.png" alt="client brand logo">
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="client-logo-item">
                                        <img className="client__logo-brand" src="/images/e-logo.png" alt="client brand logo"/>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="client-logo-item">
                                        <img className="client__logo-brand" src="/images/e-logo.png" alt="client brand logo"/>
                                    </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                    <div className="client-logo-item">
                                        <img className="client__logo-brand" src="/images/e-logo.png" alt="client brand logo"/>
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

export default ClientsLogo;