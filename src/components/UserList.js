import React, { useContext } from "react";

import { UserListContext } from "../App";

export default function UserList() {
  const { userList } = useContext(UserListContext);
  if (!userList.length) {
    return null;
  }
  return (
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
        {userList.map((user, index) => {
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
  );
}
