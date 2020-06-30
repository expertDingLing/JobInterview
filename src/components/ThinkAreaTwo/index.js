import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ThinkAreaTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="think-area responsive-content think--area area-padding">
                <div className="think-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="avivon-heading inspire-title2 mb-40px">
                                    <h2 className="avivon__title third__title ">
                                        we work in partnership with all the major <br/>
                                        consultancy & finance experts</h2>
                                </div>
                                <div className="avivon-btn">
                                    <a href="#" className="avivon__btn">
                                        get started <span className="fontello icon-angle-double-right"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="think-column-box boxed-bg-3">
                                    <div className="think-boxed">
                                        <h3 className="boxed__title">
                                            explore consultancy services</h3>
                                        <a href="/single-service" className="boxed__btn">read more
                                            <span className="fontello icon-angle-double-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="think-column-box boxed-bg-4">
                                    <div className="think-boxed">
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

export default ThinkAreaTwo;