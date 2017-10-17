import React, { Component } from 'react'
import { connect } from 'react-redux'
import Store from '../../store'

class Songs extends Component {
  displayTitle() {
    if(this.props.streaming.title !== '') {
      return (
        <div className="currently-playing-box">
          <p className="now-playing">Now Playing</p>
          <h6 className="font-style">{this.props.streaming.title}</h6>
          <div className="streaming-line">
            <hr/>
          </div>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  handleMusic1(e) {
    const music = document.querySelector('#music-1')
    if(music.paused) {
      music.play()
      e.target.className = 'p-button pause'
      Store.dispatch({ type: 'CURRENTLY_STREAMING', payload: { title: this.props.songs[0].name } })
    }
    else {
      music.pause()
      e.target.className = 'p-button play'
      Store.dispatch({ type: 'STOPPED_STREAMING' })
    }
  }

  handleMusic2(e) {
    const music = document.querySelector('#music-2')
    if(music.paused) {
      music.play()
      e.target.className = 'p-button pause'
      Store.dispatch({ type: 'CURRENTLY_STREAMING', payload: { title: this.props.songs[1].name } })
    }
    else {
      music.pause()
      e.target.className = 'p-button play'
      Store.dispatch({ type: 'STOPPED_STREAMING' })
    }
  }

  handleMusic3(e) {
    const music = document.querySelector('#music-3')
    if(music.paused) {
      music.play()
      e.target.className = 'p-button pause'
      Store.dispatch({ type: 'CURRENTLY_STREAMING', payload: { title: this.props.songs[2].name } })
    }
    else {
      music.pause()
      e.target.className = 'p-button play'
      Store.dispatch({ type: 'STOPPED_STREAMING' })
    }
  }

  render() {
    if(this.props.songs[0].href === null || this.props.songs[1].href === null || this.props.songs[2].href === null) {
      return (
        <section className="center-align no-preview">
          <h6 className="font-style">No Song Previews Available</h6>
        </section>
      )
    }
    else {
      return (
        <section className="center-align">
          <div className="audio-container">
            <audio src={this.props.songs[0].href} id="music-1"></audio>
            <button className="p-button play" onClick={this.handleMusic1.bind(this)}></button>
          </div>
          <div className="audio-container">
            <audio src={this.props.songs[1].href} id="music-2"></audio>
            <button className="p-button play" onClick={this.handleMusic2.bind(this)}></button>
          </div>
          <div className="audio-container">
            <audio src={this.props.songs[2].href} id="music-3"></audio>
            <button className="p-button play" onClick={this.handleMusic3.bind(this)}></button>
          </div>
          {this.displayTitle()}
        </section>
    )
    }
  }
}

function mapStateToProps(state) {
  return {songs: state.songs,
    streaming: state.streaming}
}

export default connect(mapStateToProps)(Songs)
