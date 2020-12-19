import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Albums(props) {
  const [albums, setAlbums] = useState([]);

  const userId = props.match.params.id;
  useEffect(() => {
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

  //console.log(albums);
  return (
    <>
      <h1>Albums</h1>
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
