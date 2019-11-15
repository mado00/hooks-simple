import React from 'react';
import useResources from './useResources';

const Albums = () => {
  const albums = useResources('albums');

  return (
    <ul>
      <h1>Albums</h1>
      {albums.map((album) => <li key={album.id}>{album.title}</li>)}
    </ul>
  )
}

export default Albums;