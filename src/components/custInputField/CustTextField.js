import React from "react";

import { useField } from "formik";

const CustTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta.error);
  return (
    <>
      <div className="text-field-container field-container">
        <div className="label-container">
          <label className="input-label" htmlFor={props.id || props.name}>
            {label}
          </label>
        </div>
        <div className="input-err-container">
          <div className="input-container">
            <input className="input-text" {...props} {...field} />
          </div>
          {meta.touched && meta.error ? (
            <div className="error-msg">{meta.error}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CustTextField;
