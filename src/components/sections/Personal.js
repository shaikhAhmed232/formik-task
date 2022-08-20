import React from "react";

import CustTextField from "../custInputField/CustTextField";
import CustSelectField from "../custInputField/CustSelectField";

const Personal = () => {
  return (
    <>
      <h2>Personal Details</h2>
      <div className="section-container">
        <div>
          <CustTextField
            label="Name"
            name="personal.name"
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div>
          <CustTextField
            label="Date of Birth or Age"
            name="personal.DobOrAge"
            type="text"
            placeholder="DD/MM/YYYY or Age in years"
          />
        </div>
        <div>
          <CustSelectField label="Sex" name="personal.sex">
            <option value="" disabled={true}>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </CustSelectField>
        </div>
        <div>
          <CustTextField
            label="Mobile"
            name="personal.mobileNo"
            type="text"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div className="combine-container govt-id">
          <CustSelectField
            label="Govt Issued ID"
            name="personal.govtIssuedId.idType"
          >
            <option value="" disabled={true}>
              --Select Id
            </option>
            <option value="Aadhaar">Aadhaar</option>
            <option value="Incometax">Income Tax</option>
            <option value="PAN">PAN</option>
          </CustSelectField>
          <CustTextField
            name="personal.govtIssuedId.govtId"
            type="text"
            placeholder="Enter Govt ID"
          />
        </div>
      </div>
    </>
  );
};

export default Personal;
