import React, { useState, useEffect } from "react";

export default function Albums(props) {
  const [albums, setAlbums] = useState([]);

  const id = props.match.params.id;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/user/${id}/albums`)
      .then((response) => response.json())
      .then((albums) => {
        const albumsList = albums.map((album) => ({
          id: album.id,
          title: album.title,
        }));
        setAlbums(albumsList);
      });
  }, [id]);
  console.log(albums);

  return <h1>Hi</h1>;
}
