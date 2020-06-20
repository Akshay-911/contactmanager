import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="center-align">
                <span className="blue-text text-darken-4">Contact</span> List
              </h1>
              <div>
                {contacts.map((contact) => (
                  <Contact contact={contact} key={contact.id} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
