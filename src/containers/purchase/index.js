import React, { Component } from "react";
import Title from './title';
import Content from './content';
import PageHeader from "../../components/PageHeader";
import ServicePage from "../../components/ServicePage";
import './style.css';

class Services extends Component {
  render() {
    return (
        <React.Fragment>
            <PageHeader setDay={"Services"} />
            <ServicePage />
        </React.Fragment>
    )
  }
}

export default Services;
