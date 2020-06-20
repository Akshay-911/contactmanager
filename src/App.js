import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import Contacts from "./components/contacts/Contacts";
import Header from "./components/layouts/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" render={() => <Contacts />}></Route>
                <Route exact path="/contact/add" component={AddContact}></Route>
                <Route exact path="/about" render={() => <About />}></Route>
                <Route
                  exact
                  path="/contact/edit/:id"
                  component={EditContact}
                ></Route>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
