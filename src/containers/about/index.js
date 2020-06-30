import React, { Component } from "react";
import PageHeader from "../../components/PageHeader";
import ThinkAreaThree from "../../components/ThinkAreaThree";
//import FunFact from "../../components/FunFact";
import Team from "../../components/Team";
//import TestimonialTwo from "../../components/TestimonialTwo";
import OfferThree from "../../components/OfferThree";
//import ClientsLogo from "../../components/ClientsLogo";
import Meet from "../../components/Meet";
import Interview1 from "../../components/Interview1"

class About extends Component {
  render() {
    return (
      <React.Fragment>
          <PageHeader setDay={"About"} />
          <section className="contact-area responsive-content area-padding">
                <div className="contact-fluid">
                    <div className="container contact-info avivon-pb">
                        <div className="row">
                            <div className="col-md-12 primary-padding">
                                <div className="avivon-heading">
                                    <center>
                                        <h2 className="">About</h2>
                                    </center>
                                    <p className="avivon__desc contact__desc mt-50px">
                                        Welcome to SCREENLE, World’s first dedicated Artificial Intelligence Powered Job interviewing tool. <br></br><br></br>
                                        With the aim of bringing you the best experience with the latest AI technologies, we are passionate about what we do. <br></br><br></br>
                                        In the current environment of dematerialization and increase in the use of online connecting services, it is still not easy for candidates to be 
                                        trained for job interviews, and for hiring companies to organize and assess these interviews. <br></br><br></br>
                                        Our main task is to provide you with the latest AI powered tools for job interviewing, developed by ourselves, and support you in your training or 
                                        job screening experiences. <br></br>
                                        To achieve this, we use the latest text analysis, speech to text, text-to speech, sentiment analysisand Artificial Intelligencetechnologies. <br></br><br></br>
                                        Visit our Linkedin, Facebook or Instagram pages to be informed of the latest functionalities and news.  <br></br><br></br>
                                        We are also here to follow up on your requests and answer all your questions. We can be reached at +41 22 534 99 00 (Switzerland) or +33 970 
                                        44 49 99 (France). You can also contact us at any time by email via the contact form, we will get back to you within 48 hours. <br></br><br></br>
                                        See you soon.  <br></br><br></br>
                                        The Screenle Team
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
  }
}

export default About;
