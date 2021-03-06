import React, { useState, useEffect } from "react";
import User from "./User";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        const usersNames = users.map((user) => ({
          name: user.name,
          address: user.address,
          id: user.id,
        }));
        setUsers(usersNames);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </ul>
    </>
  );
}

export default App;
