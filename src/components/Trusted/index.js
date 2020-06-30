import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Trusted extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="trusted-area area-padding parallax-area text-center">
                <div className="trusted-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="trusted-content">
                                    <div className="trusted__icon mb-53px">
                                        <span className="fontello icon-money"></span>
                                    </div>
                                    <div className="trusted__title mb-60px">
                                        <h2 className="trusted__title-title">
                                            Discover how Screenle uses Artificial Intelligence with tailoring capacities by signing-up
                                        </h2>
                                    </div>
                                    <div className="trusted__btn">
                                        <a href="#" className="trusted__btn-btn">
                                            get started <span className="fontello icon-angle-double-right"></span>
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

export default Trusted;