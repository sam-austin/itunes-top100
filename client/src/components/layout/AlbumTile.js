import React from 'react'

const AlbumTile = ({ fetchedAlbum, index }) => {

  return(
    <div className='album-tile'>
      <h6>{index}</h6>
      <img alt='album img' src={fetchedAlbum["im:image"][0].label} />
      <h5>{fetchedAlbum["im:name"].label}</h5>
      <h5>{fetchedAlbum["im:artist"].label}</h5>
    </div>
  )
}

export default AlbumTile