import React from "react"
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons"

const SearchBar = ({ handleInputChange, searchedAlbum }) => {

  return(
    <Input 
      prefix={<SearchOutlined />}
      placeholder=" Search..." 
      size="default size" 
      onChange={handleInputChange}
      value={searchedAlbum}  
    />
  )
}

export default SearchBar