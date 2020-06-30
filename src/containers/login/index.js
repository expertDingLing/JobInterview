import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from '../../actions/authActions';
import './style.css';

class Login extends Component {

   handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser();
    this.props.history.push("/")
   } 

  render() {
    return (
      <div className="row big-div margin-top-40px">                                
        <div className="portlet light bordered col-md-6 left-sub-div">                
            <div className="portlet-body form">
                <form role="form" className="login-form" onSubmit={this.handleSubmit}>
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
                            <input type="text" className="form-control" id="form_control_1" placeholder="Email"/>
                        </div>
                        <div className="form-group form-md-line-input form-md-floating-label has-success btn_suc">
                            <input type="password" className="form-control" id="form_control_2" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="a-href">
                        <input type="checkbox" style={{margin: "2px"}}/>
                        <a className="remember" href="#">
                            Remember me
                        </a>
                        <a className="forgot" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="form-actions noborder">
                        <button type="submit" className="btn blue    first-sign-in">Sign In</button>
                    </div>
                </form>
            </div>
        </div>       
        <div className="portlet light bordered col-md-4 right-sub-div">
            <div className="portlet-body form">
                <form role="form">
                    <div className="form-body right-body">
                        <h1 className="hellof">Hello!</h1>
                        <hr className="second-hr"/>
                        <div className="complex">
                            <h4>Log in to your existing account and</h4><br/><h4> continue your journey with us</h4>
                        </div>                            
                    </div>
                </form>
            </div>
        </div>                             
    </div>
    )
  }
}

const mapDispatchToProps = {
    loginUser
}
  
export default connect(
    null,
    mapDispatchToProps
)(Login);
