import React, { Component } from "react";
import PageHeader from "../../components/PageHeader";
import ServiceSingle from "../../components/ServiceSingle";
import './style.css';

class Services extends Component {
  render() {
    return (
        <React.Fragment>
          <PageHeader setDay={"Service"} />
          <ServiceSingle />
        </React.Fragment>
    )
  }
}

export default Services;
