import React, { Component } from "react";
import Slider from "./slider";
import Offer from "../../components/Offer";
import Choose from "../../components/Choose";
import Team from "../../components/Team";
import Trusted from "../../components/Trusted";
//import ClientsLogo from "../../components/ClientsLogo";
import Service from "../../components/Service";
import Blog from "../../components/Blog";
import CallToAction from "../../components/CallToAction";
//import OfficeCarousel from "../../components/OfficeCarousel";
import MapG from "../../components/MapG";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider />
        <Offer />
        <Choose />
        <Trusted />
        {/* <ClientsLogo /> */}
        <Service />
        <Blog />
        <CallToAction />
        {/* <OfficeCarousel /> */}
      </React.Fragment>
    )
  }
}

export default Home;
