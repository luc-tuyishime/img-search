import React, { Component } from "react"

const SearchBar = props => {
  return (
    <form>
      <input
        onChange={props.changeSearchTermState}
        type="text"
        placeholder="Search Photo"
        value={props.term}
      />
    </form>
  )
}

export default SearchBar
