import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ThinkAreaThree extends Component {
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
                                    <p className="avivon__desc offer-title2 mt-0 mb-10px">
                                    MockRabbit is a mock interviewing tool that lets you practice a mock interview and perfect your interviewing skills to attract the potential employer with confidence.
                                    </p>
                                    <p className="avivon__desc offer-title2 mt-0 mb-10px">
MockRabbit app has questions relevant to computer science, android developer, iOS developer, web developer, and other tech interview mock tests. We have carefully selected the questions and provided the answer based on our years of experience in hiring and developing tech professinoals to build a successful career.
</p>
<p className="avivon__desc offer-title2 mt-0 mb-10px">
Using MockRabbit, you can give a mock interview on your own time. Our Natural Language Processing Engine (NLP), Artificial Intelligence engine and machine learning; automatically converts your voice to text and match your answer with our system stored answers. You will get the result at an instant to assess your readiness to face the real interview. And it's completely confidential.</p>
                                    <a href="#" className="avivon__btn">
                                        get started <span className="fontello icon-angle-double-right"></span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="think-column-box think-column-box2 clearfix">
                                    <div className="think-boxed think--boxed boxed-bg-3"></div>
                                    <div className="think-boxed think--boxed boxed-bg-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ThinkAreaThree;