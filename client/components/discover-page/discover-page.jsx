import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrentArtist from './current-artist.jsx'
import Recommended from './recommended-artists.jsx'
import NavBar from '../nav-bar.jsx'
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
          <div className="row">
            <div className="col s2 rec-container-1">
              {Recommended(this.props.recommended[0].name)(this.props.recommended[0].pic)}
            </div>
            <div className="col s2">
              {Recommended(this.props.recommended[1].name)(this.props.recommended[1].pic)}
                <div className="separator"></div>
              {Recommended(this.props.recommended[2].name)(this.props.recommended[2].pic)}
            </div>
            <div className="col s4 current-box">
              <CurrentArtist/>
            </div>
            <div className="col s2">
              {Recommended(this.props.recommended[3].name)(this.props.recommended[3].pic)}
                <div className="separator"></div>
              {Recommended(this.props.recommended[4].name)(this.props.recommended[4].pic)}
            </div>
            <div className="col s2 rec-container-1">
              {Recommended(this.props.recommended[5].name)(this.props.recommended[5].pic)}
            </div>
          </div>
        </section>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {recommended: state.recommended}
}

export default connect(mapStateToProps)(DiscoverPage)