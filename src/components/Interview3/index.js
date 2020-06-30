import React, { Component } from "react";

import '../../assets/frontend/layout/css/style.css';
//import '../../assets/global/plugins/select2/select2.css';
import '../../assets/global/css/components.css';
import '../../assets/global/css/plugins.css';
import '../../assets/global/plugins/jquery-file-upload/css/jquery.fileupload.css';
import '../../assets/interview.css';

class Interview3 extends Component {
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
                                    <li>
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
                                    
                                    <li className="active">
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
                                <div className="portlet box blue">
                                            <div className="portlet-title">
                                                <div className="caption">
                                                    <i className="fa fa-cogs"></i>Questions
                                                </div>
                                                <div className="tools">
                                                    <a  className="collapse" data-original-title="" title="">
                                                    </a>
                                                    <a href="#portlet-config" data-toggle="modal" className="config" data-original-title="" title="">
                                                    </a>
                                                    <a  className="reload" data-original-title="" title="">
                                                    </a>
                                                    <a  className="remove" data-original-title="" title="">
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="portlet-body" style={{display: "block"}}>
                                                <div className="table-scrollable">
                                                    <table className="table table-hover">
                                                    <thead>
                                                    <tr>
                                                        <th>
                                                             Question#
                                                        </th>
                                                        <th>
                                                             Type
                                                        </th>
                                                        <th>
                                                             Edit question
                                                        </th>
                                                        <th>
                                                             Weighting
                                                        </th>                                                        
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                             1
                                                        </td>
                                                        <td>
                                                             <select>
                                                                 <option value="System">System</option>
                                                                 <option value="User">User</option>
                                                             </select>
                                                        </td>
                                                        <td>
                                                             <input type="text"/>
                                                        </td>
                                                        <td>
                                                            <input type="text" value="10%"/>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                             1
                                                        </td>
                                                        <td>
                                                             <select>
                                                                 <option value="System">System</option>
                                                                 <option value="User">User</option>
                                                             </select>
                                                        </td>
                                                        <td>
                                                             <input type="text"/>
                                                        </td>
                                                        <td>
                                                            <input type="text" value="10%"/>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                             1
                                                        </td>
                                                        <td>
                                                             <select>
                                                                 <option value="System">System</option>
                                                                 <option value="User">User</option>
                                                             </select>
                                                        </td>
                                                        <td>
                                                             <input type="text"/>
                                                        </td>
                                                        <td>
                                                            <input type="text" value="10%"/>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                             1
                                                        </td>
                                                        <td>
                                                             <select>
                                                                 <option value="System">System</option>
                                                                 <option value="User">User</option>
                                                             </select>
                                                        </td>
                                                        <td>
                                                             <input type="text"/>
                                                        </td>
                                                        <td>
                                                            <input type="text" value="10%"/>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                             1
                                                        </td>
                                                        <td>
                                                             <select>
                                                                 <option value="System">System</option>
                                                                 <option value="User">User</option>
                                                             </select>
                                                        </td>
                                                        <td>
                                                             <input type="text"/>
                                                        </td>
                                                        <td>
                                                            <input type="text" value="10%"/>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                             1
                                                        </td>
                                                        <td>
                                                             <select>
                                                                 <option value="System">System</option>
                                                                 <option value="User">User</option>
                                                             </select>
                                                        </td>
                                                        <td>
                                                             <input type="text"/>
                                                        </td>
                                                        <td>
                                                            <input type="text" value="10%"/>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                             1
                                                        </td>
                                                        <td>
                                                             <select>
                                                                 <option value="System">System</option>
                                                                 <option value="User">User</option>
                                                             </select>
                                                        </td>
                                                        <td>
                                                             <input type="text"/>
                                                        </td>
                                                        <td>
                                                            <input type="text" value="10%"/>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                             1
                                                        </td>
                                                        <td>
                                                             <select>
                                                                 <option value="System">System</option>
                                                                 <option value="User">User</option>
                                                             </select>
                                                        </td>
                                                        <td>
                                                             <input type="text"/>
                                                        </td>
                                                        <td>
                                                            <input type="text" value="10%"/>
                                                        </td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                             1
                                                        </td>
                                                        <td>
                                                             <select>
                                                                 <option value="System">System</option>
                                                                 <option value="User">User</option>
                                                             </select>
                                                        </td>
                                                        <td>
                                                             <input type="text"/>
                                                        </td>
                                                        <td>
                                                            <input type="text" value="10%"/>
                                                        </td>                                                        
                                                    </tr>
                                                    </tbody>
                                                    </table>
                                                </div>
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
                                        <a  className="btn default button-previous new-btn-blue" href="/interview2">
                                        <i className="m-icon-swapleft"></i> Back </a>
                                        <a  className="btn blue button-next new-btn-blue">
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

export default Interview3;