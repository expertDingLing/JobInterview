import React, { Component } from "react";
import PageHeader from "../../components/PageHeader";
// import Trusted from "../../components/TimeLine";
import Steps from "../../components/Steps";
import './style.css';

class Services extends Component {
  render() {
    return (
        <React.Fragment>
          <PageHeader setDay={"Service"} />
          <Steps />
        </React.Fragment>
    )
  }
}

export default Services;
