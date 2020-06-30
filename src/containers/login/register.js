import React, { Component } from "react";
import './style.css';

class Register extends Component {
  render() {
    return (
        <div className="row big-div">                                
            <div className="portlet light bordered col-md-6 left-sub-div">                
                <div className="portlet-body form">
                    <form role="form" className="login-form">
                        <h1 className="first-title">Create Account</h1>
                        <hr className="first-hr"/>
                        <ul className="social-icons">
                            <li className="social-li">
                                <a className="social-icon-color facebook" data-original-title="facebook" href="javascript:;"></a>
                            </li>
                            <li className="social-li">
                                <a className="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;"></a>
                            </li>
                            <li className="social-li">
                                <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;"></a>
                            </li>                            
                        </ul>
                        <div className="above-body">or use your email account</div>
                        <div className="form-body" style={{marginBottom: "25px"}}>                            
                            <div className="form-group form-md-line-input form-md-floating-label has-success btn_suc">
                                <input type="text" className="form-control" id="form_control_1" placeholder="Email" required/>
                            </div>
                            <div className="form-group form-md-line-input form-md-floating-label has-success btn_suc">
                                <input type="number" className="form-control" id="form_control_2" placeholder="Phone Number"/>
                            </div>
                            <div className="form-group form-md-line-input form-md-floating-label has-success btn_suc">
                                <input type="password" className="form-control" id="form_control_3" placeholder="Password" required/>
                            </div>
                            <div className="form-group form-md-line-input form-md-floating-label has-success btn_suc">
                                <input type="password" className="form-control" id="form_control_4" placeholder="Retype Password" required/>
                            </div>
                            <div className="form-group form-md-line-input form-md-floating-label has-success btn_suc">
                                <span>Type of account : </span>
                                <select>
                                    <option value="Candidate">Candidate</option>
                                    <option value="Company">Company</option>
                                </select>
                            </div>
                        </div>
                        <div className="a-href" style={{marginLeft: "-16rem"}}>
                            <input type="checkbox" style={{margin: "2px"}}/>
                            <a className="remember" href="#" style={{marginRight: "0"}}>
                                Remember me
                            </a>
                        </div>
                        <div className="form-actions noborder">
                            <button type="button" className="btn blue first-sign-in">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>       
            <div className="portlet light bordered col-md-4 right-sub-div">
                <div className="portlet-body form">
                    <form role="form">
                        <div className="form-body">
                            <h1 className="hellof">Hello!</h1>
                            <hr className="second-hr"/>
                            <div className="complex">
                                <h4>Sign up free of charge and </h4><br/><h4> start journey with us</h4>
                            </div>                            
                        </div>
                    </form>
                </div>
            </div>                             
        </div>
    )
  }
}

export default Register;
