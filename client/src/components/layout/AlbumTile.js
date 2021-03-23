import React, { useState } from "react"
import { Card, Avatar } from "antd"
const { Meta } = Card

import ModalTile from "./ModalTile"

const AlbumTile = ({ fetchedAlbum, index }) => {

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  }

  const handleCancel = () => {
    setModalVisible(false);
  }

  return(
    <>
      <Card 
        className="album-tile"
        hoverable
        bordered={false}
        onClick={showModal}
        cover={<img className="card-image" alt="album img" src={fetchedAlbum["im:image"][2].label} />}
      >
        <Meta
          avatar={<Avatar style={{ backgroundColor: "royalblue" }}>{index}</Avatar>} 
          title={
            <div 
              style={{ 
                fontSize: "14px", 
                overflow: "hidden",
                whiteSpace: "normal", 
                textOverflow: "ellipsis" 
              }}
            >
              {fetchedAlbum["im:name"].label}
            </div>
          }
          description={
            <div
              style={{  
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis" 
              }}
            >
              {fetchedAlbum["im:artist"].label}
            </div>
          }
        />
      </Card>
      <ModalTile modalVisible={modalVisible} handleCancel={handleCancel} fetchedAlbum={fetchedAlbum} />
    </>

  )
}

export default AlbumTile
