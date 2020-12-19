import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Albums(props) {
  const [albums, setAlbums] = useState([]);
  const [userName, setUserName] = useState("");

  const userId = props.match.params.id;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => {
        const currentUser = users.find((user) => user.id === +userId);
        setUserName(currentUser.name);
      });

    fetch(`https://jsonplaceholder.typicode.com/user/${userId}/albums`)
      .then((response) => response.json())
      .then((albums) => {
        const albumsList = albums.map((album) => ({
          id: album.id,
          title: album.title,
        }));
        setAlbums(albumsList);
      });
  }, [userId]);

  return (
    <>
      {userName && <h1>Albums of {userName}</h1>}
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/user/${userId}/album/${album.id}`}>
              <h2>{album.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
