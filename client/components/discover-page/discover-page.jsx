import React, { Component } from 'react'
import NavBar from '../nav-bar.jsx'
import DisplayArtists from './display-artists.jsx'
import Store from '../../store'

class DiscoverPage extends Component {
  componentWillMount() {
    Store.dispatch({ type: 'DO_NOT_REDIRECT' })
  }
  
  render() {
    return (
      <section>
        <NavBar/>
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
          <DisplayArtists/>
        </section>
      </section>
    )
  }
}

export default DiscoverPage