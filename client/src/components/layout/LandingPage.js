import React, { useState, useEffect } from "react"
import { Layout} from 'antd';
const { Header, Content } = Layout;

import AlbumTile from "./AlbumTile"


const LandingPage = props => {
  
  const [fetchedAlbums, setFetchedAlbums] = useState([])

  const getAlbums = async () => {
    try {
      const response = await fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setFetchedAlbums(responseBody.feed.entry)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getAlbums()
  }, [])

  const albumDisplay = fetchedAlbums.map(fetchedAlbum => {
    return(
      <AlbumTile
        key={fetchedAlbum.id.label}
        fetchedAlbum={fetchedAlbum}
        index={fetchedAlbums.indexOf(fetchedAlbum) + 1}
      />
    )
  })
  
  return(
    <Layout>
      <Header></Header>
      <div className="grid-x grid-margin-x">
        <div className="cell medium-2 large-2" />
        <div className="cell small-12 medium-8 large-8">
          <Content style={{ backgroundColor: "white" }} className='album-container'>
            {albumDisplay}
          </Content>
        </div>
        <div className="cell medium-2 large-2" />
      </div>
    </Layout>
  )
}

export default LandingPage