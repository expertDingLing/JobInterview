import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="contact-area responsive-content area-padding">
                <div className="contact-fluid">
                    <div className="container contact-info avivon-pb">
                        <div className="row">
                            <div className="col-md-12 primary-padding">
                                <div className="avivon-heading">
                                    <center>
                                        <h2 className="">Contact</h2>
                                    </center>
                                    <p className="avivon__desc contact__desc mt-50px">
                                        We are here to follow up on your requests and answer all your questions. We can be reached at +41 22 534 99 
                                        00 (Switzerland) or +33 970 44 49 99 (France).<br></br>

                                        You can also contact us at any time by email via the contact form here below; we will get back to you within 48 hours.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                                <div className="comment__form contact__form">
                                    <form action="#">
                                        <div className="form-group">
                                            <div className="col-md-6 p-left-0">
                                                <label className="control-label">Full Name</label>
                                                <div className="input__box-input">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 p-right-0">
                                                <label className="control-label">E-mail *</label>
                                                <div className="input__box-input">
                                                    <input type="email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="control-label">Phone Number</label>
                                                <div className="input__box-input">
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <label className="control-label">Message</label>
                                                <textarea name="message"></textarea>
                                            </div>
                                            <div className="col-md-12">
                                                <button className="submit__btn-btn" style={{padding: "14px 28px"}}>SEND</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;