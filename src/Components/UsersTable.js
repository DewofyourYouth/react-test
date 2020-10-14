import React from "react";
import UserRow from "./UserRow";

function UserTable(props) {
  return (
    <div className="col-12">
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone #</th>
          </tr>
          {props.users.map((user) => (
            <UserRow user={user} key={user._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
