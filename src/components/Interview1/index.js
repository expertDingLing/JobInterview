import React, { Component } from "react";

import '../../assets/frontend/layout/css/style.css';
//import '../../assets/global/plugins/select2/select2.css';
import '../../assets/global/css/components.css';
import '../../assets/global/css/plugins.css';
import '../../assets/global/plugins/jquery-file-upload/css/jquery.fileupload.css';
import '../../assets/interview.css';

class Interview1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section v-observe-visibility="onVisibilityChange" className="about-section funfact-area responsive-content parallax-area area-padding text-center">
                      <div className="row">
                <div className="col-md-12">
                    <div className="portlet box blue" id="form_wizard_1">
                        <div className="portlet-body form">
                            <form action="#" className="form-horizontal" id="submit_form" method="POST">
                                <div className="form-wizard">
                                    <div className="form-body">
                                        <ul className="nav nav-pills steps">
                                            <li className="active">
                                                <a href="/interview1" className="step text-align-center">
                                                <span className="number">
                                                1 </span>
                                                <span className="desc p-t-15">
                                                <i className="fa fa-check"></i> Account Setup </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/interview2" className="step text-align-center">
                                                <span className="number">
                                                2 </span>
                                                <span className="desc p-t-15">
                                                <i className="fa fa-check"></i> Profile Setup </span>
                                                </a>
                                            </li>
                                            
                                            <li>
                                                <a href="/interview3" className="step text-align-center">
                                                <span className="number">
                                                3 </span>
                                                <span className="desc p-t-15">
                                                <i className="fa fa-check"></i> Confirm </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div id="bar" className="progress progress-striped" role="progressbar">
                                            <div className="progress-bar progress-bar-success">
                                            </div>
                                        </div>
                                        <div className="tab-content">
                                            <div className="alert alert-danger display-none">
                                                <button className="close" data-dismiss="alert"></button>
                                                You have some form errors. Please check below.
                                            </div>
                                            <div className="alert alert-success display-none">
                                                <button className="close" data-dismiss="alert"></button>
                                                Your form validation is successful!
                                            </div>
                                            <div className="tab-pane active" id="tab1">
                                                <h3 className="block desctipt-h">About the Candidate:</h3>
                                                <div className="form-group active"  id="enter-or-upload">
                                                    <a className="btn blue new-btn">
                                                        Upload RESUME
                                                    </a>
                                                    <a className="btn blue new-btn">
                                                        Enter LINKEDIN ACCOUNT LINK
                                                    </a>
                                                </div>
                                                <div className="form-group" id="enter-profile" active>
                                                    <div className="col-md-2"></div>
                                                    <label className="control-label col-md-3">Username <span className="required">
                                                    * </span>
                                                    </label>
                                                    <div className="col-md-4">
                                                        <input type="text" className="form-control" name="username"/>
                                                        <span className="help-block">
                                                        Provide your username </span>
                                                    </div>
                                                    
                                                    <a className="btn green new-btn-back">
                                                        Back
                                                    </a>
                                                </div>
                                                <div className="form-group" id="upload-profile" active>
                                                    <a className="btn green new-btn-back">
                                                        Back
                                                    </a>
                                                </div>   
                                                    
                                                <h3 className="block desctipt-h">About the Position:</h3>
                                                <div className="form-group">
                                                    <div className="col-md-2"></div>
                                                    <label className="control-label col-md-3">POSITION TITLE <span className="required">
                                                    * </span>
                                                    </label>
                                                    <div className="col-md-4">
                                                        <input type="text" className="form-control" name="username"/>
                                                        <span className="help-block p-t-5">
                                                        Provide your position title </span>
                                                    </div>
                                                    
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-2"></div>
                                                    <label className="control-label col-md-3">INTERVIEWER NAME AND POSITION<span className="required">
                                                    * </span>
                                                    </label>
                                                    <div className="col-md-4">
                                                        <div className="row">
                                                            <div className="col-md-6 p-left-0 res-input">
                                                                <input type="text" className="form-control" name="username"/>
                                                            </div>
                                                            <div className="col-md-6 p-right-0 res-input">
                                                                <input type="text" className="form-control" name="username"/>
                                                            </div>
                                                        </div>
                                                        <span className="help-block p-t-5" style={{align:"center"}}>
                                                            Provide your interviewer name and position
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <a className="btn green new-btn" style={{height: "40px"}}>
                                                        UPLOAD JOB DESCRIPTION
                                                    </a>
                                                    <a className="btn green new-btn" style={{height: "40px"}}>
                                                        TYPE JOB DESCRIPTION
                                                    </a>
                                                </div>
                                                <div className="form-group" id="enter-or-upload-second" active>
                                                    <a className="btn green new-btn">
                                                        UPLOAD JOB DESCRIPTION
                                                    </a>
                                                    <a className="btn green new-btn" >
                                                        TYPE JOB DESCRIPTION
                                                    </a>
                                                </div>
                                                <div className="form-group" id="enter-profile-second" active>
                                                    <label className="control-label col-md-3">JOB DESCRIPTION <span className="required">
                                                    * </span>
                                                    </label>
                                                    <div className="col-md-4">
                                                        <input type="text" className="form-control" name="username"/>
                                                        <span className="help-block">
                                                        Provide your job description </span>
                                                    </div>
                                                    <div className="col-md-5"></div>
                                                    <a className="btn green new-btn-back" >
                                                        Back
                                                    </a>
                                                </div>
                                                <div className="form-group" id="upload-profile-second">
                                                    <a className="btn green new-btn-back">
                                                        Back
                                                    </a>
                                                </div>    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <div className="row">
                                            <div className="col-md-12 res-btn">
                                                <a  className="btn blue new-btn-blue" >
                                                    Save <i className="m-icon-swapright m-icon-white"></i>
                                                </a>
                                                <a  className="btn default button-previous new-btn-blue">
                                                    <i className="m-icon-swapleft"></i> Back 
                                                </a>
                                                <a  className="btn blue button-next new-btn-blue" href="/interview2">
                                                    Next <i className="m-icon-swapright m-icon-white"></i>
                                                </a> 
                                            </div>
                                        </div>
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

export default Interview1;