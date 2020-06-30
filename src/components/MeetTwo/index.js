import React, { Component } from "react";
import { Link } from 'react-router-dom';

class MeetTwo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="meet-area start-area padding theme-bg-main">
                <div className="meet-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="meet-heading">
                                    <h2 className="start__title">
                                        we know the importance of delivering the best customer
                                        experience.</h2>
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

export default MeetTwo;