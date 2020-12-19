import React from "react";
import { Link } from "react-router-dom";

export default function User({ user }) {
  return (
    <li>
      <Link to={`/user/${user.id}`}>
        <h2>{user.name}</h2>
        <p>{`${user.address.zipcode} ${user.address.city} ${user.address.street} ${user.address.suite}`}</p>
      </Link>
    </li>
  );
}
