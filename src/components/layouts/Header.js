import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props) {
  const { branding } = props;
  return (
    <nav className="nav-wrapper blue darken-4 mb-3 py-0">
      <div className="container">
        <a
          href="/"
          className="brand-logo"
          style={{
            curson: "pointer",
          }}
        >
          {branding}
        </a>
        <div>
          <ul className="right hide-on-med-and-down mr-auto">
            <li>
              <Link to="/">
                <i className="fas fa-home">Home</i>
              </Link>
            </li>
            <li>
              <Link to="/contact/add">
                <i className="fas fa-plus">Add Contact</i>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="fas fa-question">About</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: "Contact Manager",
};

Header.protoTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
