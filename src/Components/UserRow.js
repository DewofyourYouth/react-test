import React from "react";

function User(props) {
  return (
    <tr>
      <td>
        {props.user.name.last}, {props.user.name.first}
      </td>
      <td>
        <a href={"mailto:" + props.user.email}>{props.user.email}</a>
      </td>
      <td>{props.user.phone}</td>
    </tr>
  );
}

export default User;
