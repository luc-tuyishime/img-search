import React, { Component } from "react"
import SearchBar from "./components/SearchBar"
import PhotoList from "./components/PhotoList"
import "./App.css"
const API_KEY =
  "d2d4d96a647e6718f80e1bea3c491ed2e3444fb7447be2a1bae6e92087eb9ccc"

class App extends Component {
  constructor() {
    super()

    this.state = {
      photos: [],
      terms: ""
    }
  }

  componentDidMount() {
    if (this.state.term !== "") {
      this.fetchPhotos(this.state.term)
    } else {
      this.fetchPhotos("coding")
    }
  }

  fetchPhotos = term => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${API_KEY}`
    )
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        this.setState({
          photos: data.results
        })
      })
  }

  // change value f term with this method inside of SearchBar via (props)
  changeSearchTermState = event => {
    this.setState(
      {
        term: event.target.value
      },
      () => {
        this.state.term === ""
          ? this.fetchPhotos("coding")
          : this.fetchPhotos(this.state.term)
      }
    )
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          changeSearchTermState={this.changeSearchTermState}
          value={this.state.term}
        />
        <PhotoList photos={this.state.photos} />
      </div>
    )
  }
}

export default App
