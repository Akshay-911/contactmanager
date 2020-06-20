import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInput from "../layouts/TextInput";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      this.setState({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
      })
    );
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const { history } = this.props;

    //check for errors
    if (name === "") {
      this.setState({ error: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ error: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ error: { phone: "Phone is required" } });
      return;
    }

    const updateContact = {
      name,
      email,
      phone,
    };

    const { id } = this.props.match.params;

    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
      .then((res) => dispatch({ type: "UPDATE_CONTACT", payload: res.data }));

    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {},
    });
    history.push("/");
  };

  render() {
    const { name, email, phone, error } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card my-auto">
              <h4 className="display-3">Update Contact</h4>
              <div className="card-content">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInput
                    label="Name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.onChange}
                    error={error.name}
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    id="email"
                    value={email}
                    type="email"
                    onChange={this.onChange}
                    error={error.email}
                  />
                  <TextInput
                    label="Phone Number"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={this.onChange}
                    error={error.phone}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-block waves-effect waves-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
