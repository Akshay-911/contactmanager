import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function TextInput(props) {
  const { type, id, name, value, label, onChange, error } = props;

  return (
    <div className="input-field">
      <input
        type={type}
        className={classnames("validate", {
          invalid: error,
        })}
        id={id}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
      {error && <div className="helper-text">{error}</div>}
    </div>
  );
}

TextInput.protoTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.error,
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
