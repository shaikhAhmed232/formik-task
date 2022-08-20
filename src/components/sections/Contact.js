import React from "react";

import CustTextField from "../custInputField/CustTextField";
import CustSelectField from "../custInputField/CustSelectField";

const Contact = () => {
  return (
    <>
      <h2>Contact Details</h2>
      <div className="section-container">
        <div className="combine-container">
          <CustSelectField label="Guardian Name" name="contact.guardian.label">
            <option value="" disabled={true}>
              Enter Label
            </option>
            <option value="son">Son of</option>
            <option value="daughter">Daughter of</option>
            <option value="wife">Wife of</option>
            <option value="husband">Husband of</option>
          </CustSelectField>
          <CustTextField
            name="contact.guardian.guardianName"
            type="text"
            placeholder="Enter Guardian Name"
          />
        </div>
        <div>
          <CustTextField
            label="Email"
            name="contact.email"
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <CustTextField
            label="Emergency Contact Number"
            name="contact.emergencyContact"
            type="text"
            placeholder="Enter Emergency contact number"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
