import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Meet extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="meet-area area-padding theme-bg-main">
                <div className="meet-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="meet-heading text-center">
                                    <h2 className="avivon__title">meet avivon consultancy</h2>
                                    <p className="avivon__desc">
                                        We know the importance of delivering the best <br/>
                                        customer experience.</p>
                                    <a href="/contact" className="meet__btn">get started
                                        <span className="fontello icon-angle-double-right"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Meet;