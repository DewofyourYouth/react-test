import React, { useState, useEffect } from "react";
import "./App.css";

let payload = [
  {
    _id: "5f85b364f01cdfb8f4332827",
    name: {
      first: "Pitts",
      last: "Moody",
    },
    company: "BLEEKO",
    email: "pitts.moody@bleeko.info",
    phone: "+1 (879) 505-2936",
  },
  {
    _id: "5f85b3649f3f85fa662c98eb",
    name: {
      first: "Barron",
      last: "Mckinney",
    },
    company: "PHUEL",
    email: "barron.mckinney@phuel.ca",
    phone: "+1 (980) 410-3361",
  },
  {
    _id: "5f85b3641feb508fdc40e9e1",
    name: {
      first: "Nicholson",
      last: "Whitley",
    },
    company: "KYAGORO",
    email: "nicholson.whitley@kyagoro.io",
    phone: "+1 (849) 418-2470",
  },
  {
    _id: "5f85b3649b3c05eebf7192aa",
    name: {
      first: "Laura",
      last: "Norman",
    },
    company: "VERTIDE",
    email: "laura.norman@vertide.com",
    phone: "+1 (960) 518-3361",
  },
  {
    _id: "5f85b36457ab9ce34b8d8b6d",
    name: {
      first: "Faith",
      last: "Hopkins",
    },
    company: "PIGZART",
    email: "faith.hopkins@pigzart.biz",
    phone: "+1 (883) 552-3890",
  },
  {
    _id: "5f85b364f6d9fb99f2e06d33",
    name: {
      first: "England",
      last: "Wilkerson",
    },
    company: "ANOCHA",
    email: "england.wilkerson@anocha.us",
    phone: "+1 (923) 549-3802",
  },
  {
    _id: "5f85b364e398d824b969e20f",
    name: {
      first: "Sears",
      last: "Knowles",
    },
    company: "ECLIPTO",
    email: "sears.knowles@eclipto.co.uk",
    phone: "+1 (840) 528-3910",
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    sleep(3000).then(() => setUsers(payload));
  });

  return (
    <div className="container">
      {users ? (
        <div className="row">
          <div className="col-12 jumbotron">
            <h1 className="display-3 text">Welcome to the Users Table</h1>
          </div>
          <UserTable users={users} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

const Loading = () => <p>Users are loading...</p>;


// refactor this component
// for bonus points implement redux
const UserTable = ({ users }) => (
  <div className="col-12">
    <table className="table">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone #</th>
      </tr>
      {users.map((user) => (
        <tr>
          <td>
            {user.name.last}, {user.name.first}
          </td>
          <td>
            <a href={"mailto:" + user.email}>{user.email}</a>
          </td>
          <td>{user.phone}</td>
        </tr>
      ))}
    </table>
    <form>
      <div className="form-row">
        <div className="col">
          <label for="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="col">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <label for="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
        </div>{" "}
        <div className="col">
          <label for="phoneNum">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phoneNum"
            name="phoneNum"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Sign in</button>
    </form>
  </div>
);

export default App;
