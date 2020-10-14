import React, { useState, useEffect } from "react";
import UsersTable from "./Components/UsersTable";
import Form from "./Components/Form";

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
    sleep(3000).then(() => {
      if (!users) {
        setUsers(payload);
      }
    });
  });

  const addNewUser = (data) => {
    const newUser = {
      _id: data.id,
      name: {
        first: data.firstName,
        last: data.lastName,
      },
      company: data.company,
      email: data.email,
      phone: data.phoneNum,
    };
    let newUsers = [...users];
    newUsers.push(newUser);
    setUsers(newUsers);
  };

  return (
    <div className="container">
      {users ? (
        <div className="row">
          <div className="col-12 jumbotron bg-info">
            <h1 className="display-3 text-center text-white">
              Welcome to the Users Table
            </h1>
          </div>
          <div className="col-12">
            <UsersTable users={users} />
            <hr />
            <Form addNewUser={addNewUser} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

const Loading = () => <p>Users are loading...</p>;

/*
  You can change anything you want,
  make as many files and folders and you want!
  You can even make things pretty with fancy css
  Although I don't know why you would want do that :)
  The point is: do whatever you want! - the world is your oyster!

  Here is you mission should you choose to accept it.

  REFACTOR THE "UserTable" COMPONENT:
  
  1) make the form work
  2) clean up the code
  3) make sure there are no "compiler" errors

  4) BONUS: implement redux to make changes to the list persistent
*/

export default App;
