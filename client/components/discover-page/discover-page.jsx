import React, { Component } from 'react'
import CurrentArtist from './current-artist.jsx'

class DiscoverPage extends Component {
  render() {
    return (
      <section className="discover-page container">
        <div className="row">
          <div className="col s12">
            <header className="font-style">
              <h4>Discover artists through an infinte chain of suggestions.</h4>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <CurrentArtist/>
          </div>
        </div>
      </section>
    )
  }
}

export default DiscoverPage