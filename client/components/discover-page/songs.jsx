import React, { Component } from 'react'
import { connect } from 'react-redux'

class Songs extends Component {
  handleMusic1(e) {
    const music = document.querySelector('#music-1')
    if(music.paused) {
      music.play()
      e.target.className = 'p-button pause'
    }
    else {
      music.pause()
      e.target.className = 'p-button play'
    }
  }
  handleMusic2(e) {
    const music = document.querySelector('#music-2')
    if(music.paused) {
      music.play()
      e.target.className = 'p-button pause'
    }
    else {
      music.pause()
      e.target.className = 'p-button play'
    }
  }
  handleMusic3(e) {
    const music = document.querySelector('#music-3')
    if(music.paused) {
      music.play()
      e.target.className = 'p-button pause'
    }
    else {
      music.pause()
      e.target.className = 'p-button play'
    }
  }
  render() {
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
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {songs: state.songs}
}

export default connect(mapStateToProps)(Songs)