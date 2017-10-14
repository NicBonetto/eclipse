import React, { Component } from 'react'
import SearchBar from './search-bar.jsx'
import NavBar from '../nav-bar.jsx'

class SearchPage extends Component {
  render() {
    return (
      <section>
        <NavBar/>
        <section className="search-page container">
            <div className="row">
              <div className="col s12 center-align header-container">
                <header className="font-style">
                  <h3>Eclipse</h3>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col s4 offset-s4">
                <hr className="white-color"/>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align">
                <h4 className="font-style">Discover artists through a chain of suggestions.</h4>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align decrease-margin-top">
                <h5 className="font-style">Enter an artist's name:</h5>
              </div>
            </div>
            <SearchBar/>
        </section>
      </section>
    )
  }
}

export default SearchPage