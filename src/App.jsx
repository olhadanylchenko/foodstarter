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

  return <div></div>;
}

export default App;
