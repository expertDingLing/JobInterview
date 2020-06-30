import React, { Component } from "react";
import './style.css';

class Register extends Component {
  render() {
    return (
      <div className="row big-div">                                
        <div className="portlet light bordered col-md-6 left-sub-div">                
            <div className="portlet-body form">
                <form role="form" className="login-form">
                    <div className="prefix-company">Company<span className="subfix-name">Name</span></div>
                    <h1 className="first-title">Sign in to Account</h1>
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
                    <div className="form-body">                            
                        <div className="form-group form-md-line-input form-md-floating-label has-success btn_suc">
                            <input type="text" className="form-control" id="form_control_1"/>
                            <label for="form_control_2">Email</label>
                        </div>
                    </div>
                    <div className="a-href">
                        <a className="remember" href="#">
                            Remember me
                        </a>
                        <a className="forgot" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="form-actions noborder">
                        <button type="button" className="btn blue first-sign-in">Sign In</button>
                    </div>
                </form>
            </div>
        </div>       
        <div className="portlet light bordered col-md-4 right-sub-div">
            <div className="portlet-body form">
                <form role="form">
                    <div className="form-body">
                        <h1 className="hellof">Hello, Friend!</h1>
                        <hr className="second-hr"/>
                        <div className="complex">
                            <h4>Fill up personal information and</h4><br/><h4> start journey with us</h4>
                        </div>                            
                    </div>
                    <div className="form-actions noborder">
                        <button type="button" className="btn blue second-sign-in">Sign In</button>
                    </div>
                </form>
            </div>
        </div>                             
    </div>
    )
  }
}

export default Login;
