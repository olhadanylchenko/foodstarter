import React, { useState, useEffect } from "react";

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
          <>
            <h2>{user.name}</h2>
            <p>{`${user.address.zipcode} ${user.address.city} ${user.address.street} ${user.address.suite}`}</p>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
