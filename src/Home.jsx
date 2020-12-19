import React, { useState, useEffect } from "react";
import User from "./User";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        const usersNames = users.map((user) => ({
          name: user.name,
          address: user.address,
        }));
        setUsers(usersNames);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <User user={user} />
        ))}
      </ul>
    </>
  );
}

export default App;
