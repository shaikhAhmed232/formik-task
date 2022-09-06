import React, { useContext, useState } from "react";

import { UserListContext } from "../App";

export default function UserList() {
  const { userList, setUserList } = useContext(UserListContext);
  const [text, setText] = useState("");
  if (!userList.length) {
    return null;
  }

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="filter-input"
        value={text}
        onChange={handleChange}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DOB or Age</th>
            <th>Sex</th>
            <th>Mobile No</th>
            <th>Govt ID</th>
          </tr>
        </thead>
        <tbody>
          {userList
            .filter((user, index) => {
              if (text === "") {
                return user;
              } else if (user.personal.name.includes(text)) {
                return user;
              }
            })
            .map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.personal.name}</td>
                  <td>{user.personal.DobOrAge}</td>
                  <td>{user.personal.sex}</td>
                  <td>{user.personal.mobileNo}</td>
                  <td>{user.personal.govtIssuedId.idType}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

// userList.map((user, index) => {
//   return (
//     <tr key={index}>
//       <td>{index + 1}</td>
//       <td>{user.personal.name}</td>
//       <td>{user.personal.DobOrAge}</td>
//       <td>{user.personal.sex}</td>
//       <td>{user.personal.mobileNo}</td>
//       <td>{user.personal.govtIssuedId.idType}</td>
//     </tr>
//   );
// });
