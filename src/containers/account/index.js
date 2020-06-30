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

class Account extends Component {
  render() {
    return (
      <React.Fragment>
          <PageHeader setDay={"Account"} />
          <section className="contact-area responsive-content area-padding">
                <div className="contact-fluid">
                    <div className="container contact-info avivon-pb">
                        <div className="row">
                            <div className="col-md-12 primary-padding">
                                <div className="avivon-heading">
                                    <center>
                                        <h2 className="">Account</h2>
                                    </center>
                                    <p className="avivon__desc contact__desc mt-50px">
                                        Email: polarbear@gmail.com <br></br><br></br>
                                        Phone Number: 123456789 <br></br><br></br>
                                        Password: 123456 <br></br><br></br>
                                        Change Password: 123456 <br></br><br></br>
                                        Type of account: Candidate <br></br><br></br>
                                        Credit: You will be expired after 7 days <br></br><br></br>
                                        Date of Subscription: Created in 2020/6/30
                                    </p>
                                    <a href="/interview2" style={{position: "absolute", marginTop: "20px"}}>Access to interviews</a>
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

export default Account;
