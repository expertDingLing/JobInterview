import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./helpers/utility";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

// import PrivateRoute from "./components/customRoute/privateRoute";

import Header from "./containers/layout/header";
import Footer from "./containers/layout/footer";
import Home from "./containers/home";
import About from "./containers/about";
import Account from "./containers/account";
import Services from "./containers/services";
import Login from "./containers/login";
import Register from "./containers/login/register.js";
import Service from "./containers/services/service.js";
import Interview1 from "./containers/interview1/index.js";
import Interview2 from "./containers/interview2/index.js";
import Interview3 from "./containers/interview3/index.js";
import Purchase from "./containers/purchase/service.js";
import Contact from "./containers/contact/index.js";
import Candidatec from "./containers/candidate/index.js";
import Companyc from "./containers/company/index.js";
// import NotFound from "./components/not-found/NotFound";

import "./App.css";

//Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header/>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/interview1" component={Interview1} />
            <Route exact path="/interview2" component={Interview2} />
            <Route exact path="/interview3" component={Interview3} />
            <Route exact path="/purchase" component={Purchase} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/candidate" component={Candidatec} />
            <Route exact path="/company" component={Companyc} />
            {/* <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Route exact path="/not-found" component={NotFound} /> */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
