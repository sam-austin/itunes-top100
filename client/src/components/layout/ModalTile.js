import React from "react"
import { Modal } from "antd"

const AlbumTile = ({ modalVisible, handleCancel, fetchedAlbum }) => {

  return(
    <Modal 
      title={fetchedAlbum["im:name"].label} 
      visible={modalVisible} 
      onCancel={handleCancel}
      footer={null}
    >
      <div className="modal-container">
        <img className="modal-image" alt="album img" src={fetchedAlbum["im:image"][2].label} />
        <p><b>Artist(s): </b> {fetchedAlbum["im:artist"].label}</p>
        <p><b>Genre:</b> {fetchedAlbum.category.attributes.term}</p>
        <p><b>Release Date:</b> {fetchedAlbum["im:releaseDate"].attributes.label}</p>
        <p><b>Price:</b> {fetchedAlbum["im:price"].label}</p>
        <p><a href={fetchedAlbum.id.label}>Apple Music Link</a></p>
        <p style={{ color: "gray", fontSize: "9px" }}>{fetchedAlbum.rights.label}</p>
      </div>

    </Modal>
  )
}

export default AlbumTile