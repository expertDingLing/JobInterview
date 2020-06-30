import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Candidate extends Component {
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
                                <div className="avivon-heading mt-20px">
                                    <center>
                                        <h1 className="">HOW IT WORKS</h1>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-md-12 candidate">                                       
                                    <div className="col-md-3">
                                        <center>
                                            <img src="../../assets/frontend/layout/img/upload_your_resume.png"></img>
                                        </center>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="offer__title">
                                            <h2>Sign up and upload your resume</h2>
                                        </div>
                                        <div className="offer__des mt-30px">
                                            <p>
                                            Download our app, sign up and upload your resume.Based on your skills,
                                            interests, and experiences, our artificial intelligence engine will frame the 
                                            questions most likely you will be asked by the interviewer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 candidate mt-50px">
                                    <div className="col-md-3 col-md-push-9">
                                        <center>
                                            <img src="../../assets/frontend/layout/img/Start_giving_moc_interview.png"></img>
                                        </center>
                                    </div>
                                    <div className="col-md-9 col-md-pull-3">
                                        <div className="offer__title">
                                            <h2>Start giving mock interview</h2>
                                        </div>
                                        <div className="offer__des mt-30px">
                                            <p>
                                                We are happy to gift you with five free mock interview session so that you can check out 
                                                our system and prepare for our interview day.Click Start the interview button to start the 
                                                mock interview session.
                                            </p>
                                        </div>
                                    </div>                                       
                                </div>
                                <div className="col-md-12 candidate mt-50px">                                       
                                    <div className="col-md-3">
                                        <center>
                                            <img src="../../assets/frontend/layout/img/Evaluate_your_peformance.png"></img>
                                        </center>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="offer__title">
                                            <h2>Evaluate your performance</h2>
                                        </div>
                                        <div className="offer__des mt-30px">
                                            <p>
                                            The app will show you the correct answer and your score at the end of every
                                            question you have answered. Once you complete the mock interview, you will 
                                            be able to see your score, your answer, and you will be able to analyse your 
                                            readiness.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 candidate mt-50px"> 
                                    <div className="col-md-3 col-md-push-9">
                                        <center>
                                            <img src="../../assets/frontend/layout/img/rabbitadvantage.png"></img>
                                        </center>
                                    </div>
                                    <div className="col-md-9 col-md-pull-3">
                                        <div className="offer__title">
                                            <h2>The Mock Rabbit Advantage</h2>
                                        </div>
                                        <div className="offer__des mt-30px">
                                            <p>
                                            We don't record your audio and we don't attach your personal identify when we store
                                            the text response of answers. Our intelligent interviewing engine works based on the most 
                                            modern technology using Natural Language Processing, Artificial intelligence, and Machine Learning.
                                            Our team works tirelessly to build a most credible mock interviewing platform with the aim to help 
                                            you excel in the career life!
                                            </p>
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

export default Candidate;