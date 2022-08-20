import React from "react";

import CustTextField from "../custInputField/CustTextField";
import CustSelectField from "../custInputField/CustSelectField";

const cities = [
  { name: "Mumbai", value: "mum" },
  { name: "Delhi", value: "del" },
  { name: "Bangalore", value: "bnglr" },
  { name: "Uttar Pradesh", value: "up" },
];

const Address = () => {
  return (
    <>
      <h2>Address Details</h2>
      <div className="section-container">
        <div>
          <CustTextField
            label="Address"
            name="address.add"
            type="text"
            placeholder="Enter Address"
          />
        </div>
        <div>
          <CustTextField
            label="State"
            name="address.state"
            type="text"
            placeholder="Enter state"
          />
        </div>
        <div>
          <CustSelectField label="City" name="address.city">
            <option value="" disabled={true}>
              Enter city/town/village
            </option>
            {cities.map((city) => {
              return (
                <option key={city.value} value={city.value}>
                  {city.name}
                </option>
              );
            })}
          </CustSelectField>
        </div>
        <div>
          <CustTextField
            label="Country"
            name="address.country"
            type="text"
            placeholder="Enter Country"
          />
        </div>
        <div>
          <CustTextField
            label="Pincode"
            name="address.pincode"
            type="text"
            placeholder="Enter Pincode"
          />
        </div>
      </div>
    </>
  );
};

export default Address;
