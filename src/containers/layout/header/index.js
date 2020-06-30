import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { selecttab } from '../../../actions/authActions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileToggle : false,
            alertstate: props.isAuthenticated,
            selectedtab: ""
        };
        this.toggleMobile = this.toggleMobile.bind(this);
        this.selectedtab = this.selectedtab.bind(this);
    }
    toggleMobile() {
        this.setState({mobileToggle: !this.state.mobileToggle})
    }
    selectedtab(key) {
       this.props.selecttab(key);
    }
    componentDidMount(){
        if(this.props.tabname.tabname){
            var myDiv = document.getElementById(this.props.tabname.tabname);
            ReactDOM.findDOMNode(myDiv).style.span.color='black';
        }
    }
    render() {
        return (
    <div>
        <div className={`body-overlay ${this.state.mobileToggle ? "active" : ""}`}></div>
        <div className={`offcanvas-menu ${this.state.mobileToggle ? "active" : ""}`}>
          <div onClick={this.toggleMobile} className="menu__close"></div>
          <ul className="off__menu">
            <li><a href="/">HOME</a></li>
            <li><a href="/services">SERVICES</a></li>
            {this.props.isAuthenticated ? <li><a href="/candidate">SET-UP INTERVIEW</a></li>:<li><a href="/candidate">CANDIDATE</a></li>}
            {this.props.isAuthenticated ? "":<li><a href="/company">COMPANY</a></li>}
            <li><a href="/purchase">PURCHASE</a></li>
            <li><a href="/about">ABOUT</a></li>
            {this.props.isAuthenticated ? <li><a href="/register">LOG OUT</a></li>:<li><a href="/register">SIGN UP</a></li>}
            {this.props.isAuthenticated ? "":<li><a href="/login">LOGIN</a></li>}
          </ul>
        </div>
        <section className="menu-area">
            <div className="top-menu-area">
                <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                          <div className="menu-full-width">
                              <div className="logo-box">
                                  <div onClick={this.toggleMobile} className="site-open">
                                      <span className="open__only"></span>
                                      <span className="open__only"></span>
                                      <span className="open__only"></span>
                                  </div>
                                  <div className="logo">
                                      <a href="/" title="Avivon"><img src="static/images/logo.png" alt="logo"/></a>
                                  </div>
                              </div>
                              <div className="main-menu">
                                  <nav className="menu__wrapper">
                                      <ul className="dropdown-main"  style={{display:"flex"}}>
                                        
                                          <li onClick={()=>this.selectedtab("home")}>
                                              <Link to = "/">
                                                  <span className={this.props.tabname.tabname === 'home' ? "active" : ""}>HOME</span>
                                              </Link>
                                          </li>
                                          <li onClick={()=>this.selectedtab("service")}>
                                              <Link to = "/services">
                                                  <span className={this.props.tabname.tabname === 'service' ? "active" : ""} >SERVICES</span>
                                              </Link>
                                          </li>
                                          <li className="logo-right-button resource-button">
                                                <div className="lang-dropdown resources-dropdown">
                                                    <ul>
                                                        <li>
                                                            <a href="#">                                                        
                                                                HOW IT WORKS                                                        
                                                            </a>
                                                            <div className="lang-drop-item" style={{align:"center"}}>
                                                                <a href="/candidate">
                                                                    Candidate
                                                                </a>
                                                                <a href="/company">
                                                                    Company
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                          {this.props.isAuthenticated ? 
                                            <li onClick={()=>this.selectedtab("interview1")}>
                                                <Link to="/interview1">
                                                    <span className={this.props.tabname.tabname === 'interview1' ? "active" : ""}>SET-UP INTERVIEW</span>
                                                </Link>
                                            </li> : ""}
                                          <li onClick={()=>this.selectedtab("resources")}>
                                              <Link to = "#">
                                                  <span className={this.props.tabname.tabname === 'resources' ? "active" : ""} >RESOURCES</span>
                                              </Link>
                                          </li>
                                          <li onClick={()=>this.selectedtab("purchase")}>
                                              <Link to = '/purchase'>
                                                  <span className={this.props.tabname.tabname === 'purchase' ? "active" : ""}>PURCHASE</span>
                                              </Link>
                                          </li>
                                          {this.props.isAuthenticated ? 
                                            <li onClick={()=>this.selectedtab("account")}>
                                                <Link to="/account">
                                                    <span className={this.props.tabname.tabname === 'account' ? "active" : ""}>MY ACCOUNT</span>
                                                </Link>
                                            </li> : ""}
                                          <li onClick={()=>this.selectedtab("about")}>
                                              <Link to ="/about">
                                                  <span className={this.props.tabname.tabname === 'about' ? "active" : ""}>ABOUT</span>
                                              </Link>
                                          </li>
                                          {this.props.isAuthenticated ? 
                                            <li>
                                                <a href = "/register">LOG OUT</a>
                                            </li>:
                                            <li className="logo-right-button resource-button">
                                                <div className="lang-dropdown resources-dropdown">
                                                    <ul>
                                                        <li>
                                                            <a href="#">                                                        
                                                                SIGN UP                                                       
                                                            </a>
                                                            <div className="lang-drop-item" style={{align:"center"}}>
                                                                <a href="/login">
                                                                    Log-in
                                                                </a>
                                                                <a href="/register">
                                                                    Create account
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>}
                                      </ul>
                                  </nav>
                                  <div className="logo-right-button flag-dropdown">
                                      <div className="lang-dropdown">
                                          <ul>
                                              <li>
                                                  <a href="#">
                                                      <img src="static/images/flag.jpg" alt="English"/>
                                                      English
                                                      <i className="fas fa-caret-down"></i>
                                                  </a>
                                                  <div className="lang-drop-item">
                                                      <a href="#">
                                                          <img src="static/images/flag.jpg" alt="United Kingdom"/>
                                                          English
                                                      </a>
                                                      <a href="#">
                                                          <img src="static/images/flag3.jpg" alt="France"/>
                                                          French
                                                      </a>
                                                      <a href="#">
                                                          <img src="static/images/flag2.jpg" alt="Germany"/>
                                                          German
                                                      </a>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="contact-para">
                                          <i className="fa fa-comments" style={{color:"#8888d4"}}></i>
                                          <span><b>CHAT NOW</b></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="signup" className="modal fade ">
                {this.props.isAuthenticated ? <input type="input" type="hidden" value="aaa" className="alertstate"/>:<input type="input" type="hidden" value="bbb" className="alertstate"/>}
                <div className="modal-dialog modal-box">
                    <div className="modal-content email-content">
                        <div className="modal-header box-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true"></button>
                            <h3 className="modal-title">Sing up for email alert</h3>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    subscribe for latest articles and resources
                                    <div className="input">
                                        <input className="new-input" type="email" placeholder="enter email" id="modal"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer box-footer">
                            <button type="button" className="btn blue new-button">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    tabname: state.Auth.tabname,
})
  
const mapDispatchToProps = {
    selecttab
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
