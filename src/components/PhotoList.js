import React, { Component } from "react"
import PhotoListItem from "./PhotoListItem"
import UUID from "uuid"

// receive photo list as (props)
const PhotoList = props => {
  if (props.photos === []) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  const photoItems = props.photos.map(pic => {
    return (
      <div>
        <PhotoListItem key={UUID()} url={pic.urls.small} />
      </div>
    )
  })

  return (
    <div>
      <div>
        <div>{photoItems}</div>
      </div>
    </div>
  )
}

export default PhotoList
