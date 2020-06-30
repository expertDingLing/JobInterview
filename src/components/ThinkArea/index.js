import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ThinkArea extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="think-area responsive-content area-padding">
                <div className="think-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="avivon-heading">
                                    <h2 className="avivon__title">
                                        think ahead and boost your
                                        business growth</h2>
                                    <p className="avivon__desc mt-35px inspire-desc mb-30px">
                                        there are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form,
                                        by injected humour, or randomised words which don't look
                                        even slightly believable.
                                        If you are going to use a passage of lorem Ipsum.</p>
                                </div>
                                <div className="think-img">
                                    <div className="think__bg"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="think-column-box">
                                    <div className="think-boxed rpl-content">
                                        <h3 className="boxed__title">
                                            explore consultancy services</h3>
                                        <a href="/single-service" className="boxed__btn">read more
                                            <span className="fontello icon-angle-double-right"></span>
                                        </a>
                                    </div>
                                    <div className="think-boxed boxed-bg rpl-content-2"></div>
                                    <div className="think-boxed rpl-content boxed-bg-2"></div>
                                    <div className="think-boxed rpl-content-2">
                                        <h3 className="boxed__title">
                                            get a professional advice</h3>
                                        <a href="/single-service" className="boxed__btn">read more
                                            <span className="fontello icon-angle-double-right"></span>
                                        </a>
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

export default ThinkArea;