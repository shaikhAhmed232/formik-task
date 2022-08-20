import React from "react";

import { useField } from "formik";

const CustSelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="select-field-container field-container">
      <div className="label-container">
        <label className="input-label" htmlFor={props.id || props.name}>
          {label}
        </label>
      </div>
      <div className="input-err-container">
        <div className="input-container">
          <select className="input-select" {...field} {...props} />
        </div>
        {meta.touched && meta.error ? (
          <div className="error-msg">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default CustSelectField;
