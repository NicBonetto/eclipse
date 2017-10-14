import React, { Component } from 'react'
import CurrentArtist from './current-artist.jsx'

class DiscoverPage extends Component {
  render() {
    return (
      <section className="discover-page container">
        <div className="row">
          <div className="col s12">
            <header className="font-style center-align increase-margin-top">
              <h5>Discover artists through an infinte chain of suggestions.</h5>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col s12 center-align">
            <h5 className="font-style">Choose a recommened artist.</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12 artist-box">
            <CurrentArtist/>
          </div>
        </div>
      </section>
    )
  }
}

export default DiscoverPage