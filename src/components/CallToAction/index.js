import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CallToAction extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <section className="clta-area area-padding-2 theme-bg-gray">
            <div className="clta-bg"></div>
            <div className="clta-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="avivon-heading white-heading">
                                <h2 className="avivon__title">You want to know more about the technology we use? Get in touch with us!</h2>
                            </div>
                        </div>
                        <div className="col-md-9 shared-form-box">
                            <div className="col-md-6">
                                <div className="shared-form">
                                    <form action="#">
                                        <input type="text" placeholder="Full Name"/>
                                        <input type="text" placeholder="Email"/>
                                        <input className="input__number" type="text" placeholder="Phone Number"/>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="shared-form">
                                    <textarea name="message" placeholder="Message"></textarea>
                                    <button className="form__btn" value="submit">
                                        get started <span className="fontello icon-angle-double-right"></span>
                                    </button>
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

export default CallToAction;