import React from "react";

export default function User({ user }) {
  return (
    <li>
      <h2>{user.name}</h2>
      <p>{`${user.address.zipcode} ${user.address.city} ${user.address.street} ${user.address.suite}`}</p>
    </li>
  );
}
