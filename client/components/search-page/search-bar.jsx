import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import Store from '../../store'

class SearchBar extends Component {
  joinSearch(name) {
    return name.split(' ').join('+')
  }

  handleSubmit(e) {
    e.preventDefault()
    Store.dispatch({ type: 'CLEAR_CURRENT_ARTIST' })
    Store.dispatch({ type: 'CLEAR_ARTISTS' })
    Store.dispatch({ type: 'CLEAR_SONGS' })
    const artist = this.joinSearch(this.refs.keyword.value)
    fetch('/spotify/search/' + artist)
      .then(data => data.json())
      .then(parsed => {
          Store.dispatch({ type: 'RECEIVED_ARTIST', payload: { artist: { name: parsed[0].name, pic: parsed[0].images[0].url } } })
      })
    fetch('/spotify/recommended/' + artist)
      .then(data => data.json())
      .then(parsed => {
        Store.dispatch({ type: 'RECEIVED_ARTISTS', payload: { artists: parsed } })
      })
    fetch('/spotify/songs/' + artist)
      .then(data => data.json())
      .then(parsed => {
        Store.dispatch({ type: 'RECEIVED_SONGS', payload: { songs: parsed } })
      })
    Store.dispatch({ type: 'REDIRECT_NOW' })
  }

  render() {
    if(this.props.redirect.shouldDirect) {
      return (
        <Redirect to='/discover'/>
      )
    }
    return (
      <section className="row">
        <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="col s6 offset-s3">
              <div className="input-field">
                <input ref="keyword" autoFocus="autofocus" id="search" type="text"/>
                <label className="label-icon"><i className="material-icons"></i></label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s2 offset-s3" id="submit-container">
              <button className="btn waves-effect waves-light blue-grey lighten-1" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {redirect: state.redirect}
}

export default connect(mapStateToProps)(SearchBar)