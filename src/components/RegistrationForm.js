import React, { useContext, useRef } from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone";

import { UserListContext } from "../App";
import Personal from "./sections/Personal";
import Contact from "./sections/Contact";
import Address from "./sections/Address";
import OtherDetails from "./sections/OtherDetials";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";

// const initialValues = {
//   personal: {
//     name: "",
//     DobOrAge: "",
//     sex: "",
//     mobileNo: "",
//     govtIssuedId: {
//       idType: "",
//       govtId: "",
//     },
//   },
//   contact: {
//     guardian: {
//       label: "",
//       guardianName: "",
//     },
//     email: "",
//     emergencyContact: "",
//   },
//   address: {
//     add: "",
//     state: "",
//     city: "",
//     country: "India",
//     pincode: "",
//   },
//   other: {
//     occupation: "",
//     religion: "",
//     maritalStatus: "",
//     bloodGroup: "",
//   },
// };

// const mobileRegEx = /^[789]\d{9}$/;
// const DobOrAgeRegEx = /\b[0-9]{1,2}\b\/\b[0-9]{1,2}\b\/\b[0-9]{2,4}\b$/;

// DobOrAgeRegEx.test("")
// consol.

// const validatePersonal = (personalInfo, errors) => {
//   if (!personalInfo.name) {
//     errors.personal.name = "Required Field";
//   } else if (!personalInfo.name.length > 40) {
//     errors.name = "name must be under 40 digits.";
//   }
//   if (!personalInfo.DobOrAge) {
//     errors.personal.DobOrAge = "Required Field.";
//   }
//   // else if (
//   //   !DobOrAgeRegEx.test(personalInfo.DobOrAge) &&
//   //   !/\b[0-9]{2,3}\b$/.test(personalInfo.DobOrAge)
//   // ) {
//   //   errors.personal.DobOrAge =
//   //     "Provide date of birth with DD/MM/YY format or proper age.";
//   // }
//   if (!personalInfo.sex) {
//     errors.personal.sex = "Required Field";
//   }
//   if (!personalInfo.mobileNo) {
//     errors.personal.mobileNo = "Required Field";
//   }
//   //  else if (!mobileRegEx.test(personalInfo.mobileNo)) {
//   //   errors.personal.mobileNo = "Please enter valid 10 digits mobile number.";
//   // }
// };

// const validateGuardian = (guardianInfo, errors) => {
//   if (guardianInfo.guardian.guardianName && !guardianInfo.email) {
//     errors.contact.email = "Field is Required";
//   }
//   if (
//     guardianInfo.emergencyContact.length > 0 &&
//     !mobileRegEx.test(guardianInfo.emergencyContact)
//   ) {
//     errors.contact.emergencyContact =
//       "Please Enter valid 10 digit Contact Number.";
//   }
//   if (guardianInfo.guardian.guardianName && !guardianInfo.guardian.label) {
//     errors.contact.guardian.label = "Require Field";
//   }
// };

// const validate = (values) => {
//   const errors = {
//     personal: {},
//     contact: {
//       guardian: {},
//     },
//   };
//   validatePersonal(values.personal, errors);
//   validateGuardian(values.contact, errors);
//   return errors;
// };

const validationSchema = Yup.object().shape({
  personal: Yup.object().shape({
    name: Yup.string().required("Required"),
    DobOrAge: Yup.string().required("Required"),
    sex: Yup.string().required("Required"),
    mobileNo: Yup.string()
      .required("Required")
      .phone("IN", true, "Enter valid indian phone number"),
  }),
  contact: Yup.object({
    emergencyContact: Yup.string().phone(
      "IN",
      true,
      "Enter valid indian phone number"
    ),
    email: Yup.string().email("Enter valid email"),
  }),
});

export default function RegistrationForm({ initialValues }) {
  const { setUserList, userList } = useContext(UserListContext);
  const cancelRef = useRef();
  const submitRef = useRef();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      cancelRef.current.click();
    }
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setUserList([...userList, { ...values }]);
        actions.resetForm({
          values: initialValues,
        });
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, resetForm }) => {
        return (
          <Form>
            <div className="form-container">
              <Personal />
              <Contact />
              <Address />
              <OtherDetails />
              <div className="submit-btn">
                <button id="submit-btn" type="submit" ref={submitRef}>
                  Submit
                </button>
                <button
                  id="cancel-btn"
                  type="reset"
                  ref={cancelRef}
                  onClick={resetForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
