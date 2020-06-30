import React, { Component } from "react";

import '../../assets/frontend/layout/css/style.css';
//import '../../assets/global/plugins/select2/select2.css';
import '../../assets/global/css/components.css';
import '../../assets/global/css/plugins.css';
import '../../assets/global/plugins/jquery-file-upload/css/jquery.fileupload.css';
import '../../assets/interview.css';

class Interview2 extends Component {
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
                            <ul className="nav nav-pills steps space-around">
                                    <li>
                                        <a href="/interview1" className="step text-align-center">
                                        <span className="number">
                                        1 </span>
                                        <span className="desc p-t-15">
                                        <i className="fa fa-check"></i> Account Setup </span>
                                        </a>
                                    </li>
                                    <li className="active">
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
                                        <h3 className="block  desctipt-h">Select the type of interview</h3>
                                        <div className="form-group">
                                            <div href="#" className="btn blue new-btn-blue">
                                                Audio
                                            </div>
                                            <div href="#" className="btn blue new-btn-blue">
                                                Video
                                            </div>
                                        </div>                                           
                                        {/* <h3 className="block  desctipt-h">Select the duration of the interview:</h3>                                  
                                        <div className="form-group">
                                            <div className="col-md-3"></div>
                                            <label className="control-label col-md-3">select duration in min</label>
                                            <div className="col-md-1">
                                                <select name="duration" id="duration_list" className="form-control">
                                                    <option value=""></option>
                                                    <option value="">10</option>
                                                    <option value="">20</option>
                                                    <option value="">30</option>
                                                    <option value="">40</option>
                                                    <option value="">50</option>
                                                    <option value="">60</option>
                                                    <option value="">70</option>
                                                    <option value="">80</option>
                                                    <option value="">90</option>
                                                    <option value="">100</option>                                                    
                                                    <option value="">110</option>                                                    
                                                    <option value="">120</option>                                                    
                                                </select>
                                            </div>
                                        </div>    */}
                                        <h3 className="block  desctipt-h">Select the number of questions:</h3>                                        
                                        <div className="form-group">
                                            <div className="col-md-3 m-l-54"></div>
                                            <label className="control-label col-md-3">select the number of questions</label>
                                            <div className="col-md-1">
                                                <select name="question" id="question_list" className="form-control">
                                                    <option value=""></option>
                                                    <option value="">1</option>
                                                    <option value="">2</option>
                                                    <option value="">3</option>
                                                    <option value="">4</option>
                                                    <option value="">5</option>
                                                    <option value="">6</option>
                                                    <option value="">7</option>
                                                    <option value="">8</option>
                                                    <option value="">9</option>
                                                    <option value="">10</option>                                                    
                                                    <option value="">11</option>
                                                    <option value="">12</option>
                                                    <option value="">13</option>
                                                    <option value="">14</option>
                                                    <option value="">15</option>
                                                    <option value="">16</option>
                                                    <option value="">17</option>
                                                    <option value="">18</option>
                                                    <option value="">19</option>
                                                    <option value="">20</option>                                                    
                                                </select>
                                            </div>
                                        </div>  
                                       
                                        <h3 className="block desctipt-h">Select the avatar</h3>   
                                        <div className="row">
                                            <div className="col-md-12" id="select_avatar">
                                                <div className="col-md-3 col-sm-3 col-xs-6"><a href="#"><img className="avatar-img" src="./assets/img/img1.jpg"/></a></div>
                                                <div className="col-md-3 col-sm-3 col-xs-6"><a href="#"><img className="avatar-img" src="./assets/img/img1.jpg"/></a></div>
                                                <div className="col-md-3 col-sm-3 col-xs-6"><a href="#"><img className="avatar-img" src="./assets/img/img1.jpg"/></a></div>
                                                <div className="col-md-3 col-sm-3 col-xs-6"><a href="#"><img className="avatar-img" src="./assets/img/img1.jpg"/></a></div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="form-actions">
                                <div className="row">
                                    <div className="col-md-12 res-btn">
                                        <a  className="btn blue new-btn-blue">
                                        Save <i className="m-icon-swapright m-icon-white"></i>
                                        </a>
                                        <a  className="btn default button-previous new-btn-blue" href="/interview1">
                                        <i className="m-icon-swapleft"></i> Back </a>
                                        <a  className="btn blue button-next new-btn-blue" href="/interview3">
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

export default Interview2;