import React, { useState, useEffect } from "react";

export default function Photos(props) {
  const [photos, setPhotos] = useState([]);
  const albumId = props.match.params.id;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((albums) => {
        const photosList = albums.map((photo) => ({
          id: photo.id,
          title: photo.title,
          url: photo.thumbnailUrl,
        }));
        setPhotos(photosList);
      });
  }, [albumId]);

  return (
    <>
      <h1>Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <figure>
              <img src={photo.url} alt={photo.title} />
              <figcaption>{photo.title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}
