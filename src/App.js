import "./App.css";
import { createContext, useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";

const initialValues = {
  personal: {
    name: "",
    DobOrAge: "",
    sex: "",
    mobileNo: "",
    govtIssuedId: {
      idType: "",
      govtId: "",
    },
  },
  contact: {
    guardian: {
      label: "",
      guardianName: "",
    },
    email: "",
    emergencyContact: "",
  },
  address: {
    add: "",
    state: "",
    city: "",
    country: "india",
    pincode: "",
  },
  other: {
    occupation: "",
    religion: "",
    maritalStatus: "",
    bloodGroup: "",
  },
};

export const UserListContext = createContext();

function App() {
  const [userList, setUserList] = useState([]);
  return (
    <UserListContext.Provider value={{ userList, setUserList }}>
      <RegistrationForm initialValues={initialValues} />
      <UserList />
    </UserListContext.Provider>
  );
}

export default App;
