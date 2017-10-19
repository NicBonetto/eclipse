import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrentArtist from './current-artist.jsx'
import Recommended from './recommended-artists.jsx'
import Songs from './songs.jsx'
import Loader from './loader.jsx'
import Store from '../../store'

class DisplayArtists extends Component {
  componentWillMount() {
    Store.dispatch({ type: 'STOPPED_STREAMING' })
  }

  render() {
    if(this.props.recommended[0].name != '') {
      return (
        <div className="row">
          <div className="col s2 rec-container-1">
            {Recommended(this.props.recommended[0].name)(this.props.recommended[0].pic)}
          </div>
          <div className="col s2 fade">
            {Recommended(this.props.recommended[1].name)(this.props.recommended[1].pic)}
              <div className="separator"></div>
            {Recommended(this.props.recommended[2].name)(this.props.recommended[2].pic)}
          </div>
          <div className="col s4 fade">
            <CurrentArtist/>
            <Songs/>
          </div>
          <div className="col s2 fade">
            {Recommended(this.props.recommended[3].name)(this.props.recommended[3].pic)}
              <div className="separator"></div>
            {Recommended(this.props.recommended[4].name)(this.props.recommended[4].pic)}
          </div>
          <div className="col s2 rec-container-1 fade">
            {Recommended(this.props.recommended[5].name)(this.props.recommended[5].pic)}
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="row fade">
          <div className="col s12">
            <Loader/>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {recommended: state.recommended}
}

export default connect(mapStateToProps)(DisplayArtists)