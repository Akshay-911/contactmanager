import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <h4>
                  {name}{" "}
                  <i
                    onClick={() =>
                      this.setState((prevState) => ({
                        showContactInfo: !prevState.showContactInfo,
                      }))
                    }
                    className="fas fa-sort-down"
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    className="fas fa-times"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  ></i>
                  <Link to={`contact/edit/${id}`}>
                    <i
                      className="fas fa-pencil-alt"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "black",
                        marginRight: "1rem",
                      }}
                    ></i>
                  </Link>
                </h4>
                {showContactInfo && (
                  <ul className="collection">
                    <li className="collection-item blue-grey darken-1">
                      {email}
                    </li>
                    <li className="collection-item blue-grey darken-1">
                      {phone}
                    </li>
                  </ul>
                )}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
