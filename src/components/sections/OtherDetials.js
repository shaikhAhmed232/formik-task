import React from "react";

import CustTextField from "../custInputField/CustTextField";
import CustSelectField from "../custInputField/CustSelectField";

const relegions = [
  { name: "Muslim", value: "muslim" },
  { name: "Hindu", value: "hindu" },
  { name: "Christian", value: "Christian" },
  { name: "Other", value: "other" },
];

const OtherDetails = () => {
  return (
    <>
      <h2>OtherDetails Details</h2>
      <div className="section-container">
        <div>
          <CustTextField
            label="Occupation"
            name="other.occupation"
            type="text"
            placeholder="Enter Occupation"
          />
        </div>
        <div>
          <CustSelectField label="Religion" name="other.relegion">
            <option value="" disabled={true}>
              Select Relegion
            </option>
            {relegions.map((relegion) => {
              return (
                <option key={relegion.value} value={relegion.value}>
                  {relegion.name}
                </option>
              );
            })}
          </CustSelectField>
        </div>
        <div>
          <CustSelectField label="Marital Status" name="other.maritalStatus">
            <option value="" disabled={true}>
              Marital Status
            </option>
            <option value="married">Married</option>
            <option value="single">Single</option>
          </CustSelectField>
        </div>
        <div>
          <CustSelectField label="Blood Group" name="other.bloodGroup">
            <option value="" disabled={true}>
              Blood Group
            </option>
            <option value="typeA">A</option>
            <option value="typeB">B</option>
            <option value="typeO">O</option>
            <option value="typeAB">AB</option>
          </CustSelectField>
        </div>
      </div>
    </>
  );
};

export default OtherDetails;
