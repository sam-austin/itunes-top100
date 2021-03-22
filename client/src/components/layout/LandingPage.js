import React, { useState, useEffect } from "react"
import { Layout } from 'antd';
const { Header, Content } = Layout;

import AlbumTile from "./AlbumTile"
import SearchBar from "./SearchBar"


const LandingPage = props => {
  
  const [fetchedAlbums, setFetchedAlbums] = useState([])
  const [searchedAlbum, setSearchedAlbum] = useState("")

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

  const renderSearchedAlbums = fetchedAlbums.filter(fetchedAlbum => {
    if (searchedAlbum == "") {
      return fetchedAlbum
    } else if (fetchedAlbum["im:name"].label.toLowerCase().includes(searchedAlbum.toLowerCase()) || fetchedAlbum["im:artist"].label.toLowerCase().includes(searchedAlbum.toLowerCase())) {
      return fetchedAlbum
    }
  })
  
  const albumDisplay = renderSearchedAlbums.map(fetchedAlbum => {
    return(
      <AlbumTile
        key={fetchedAlbum.id.label}
        fetchedAlbum={fetchedAlbum}
        index={fetchedAlbums.indexOf(fetchedAlbum) + 1}
      />
    )
  })

  const handleInputChange = event => setSearchedAlbum(event.target.value)
  
  
  return(
    <Layout>
      <Header></Header>
      <div className="grid-x grid-margin-x" style={{ backgroundColor: "white", justifyContent: "center" }}>
        <div className="cell small-12 medium-10 large-10">
          <div className="grid-x grid-margin-x" style={{ justifyContent: "center" }}>
            <div className="cell small-12 medium 8 large-6 searchBar">
              <SearchBar handleInputChange={handleInputChange} searchedAlbum={searchedAlbum} />
            </div>
          </div>
          <Content style={{ backgroundColor: "white" }} className='album-container'>
            {albumDisplay}
          </Content>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage