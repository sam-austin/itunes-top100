import React from 'react'
import { Card, Avatar } from 'antd'
const { Meta } = Card

const AlbumTile = ({ fetchedAlbum, index }) => {

  return(
    <Card 
      className='album-tile'
      hoverable
      bordered={false}
      cover={<img className="card-image" alt='album img' src={fetchedAlbum["im:image"][0].label} />}
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
  )
}

export default AlbumTile
