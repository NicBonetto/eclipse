import React, { Component } from 'react'
import { connect } from 'react-redux'

class CurrentArtist extends Component {
  render() {
    return (
      <section className="center-align">
        <div>
          <img className="image-bubble" src={this.props.current.pic}/>
        </div>
        <div>
          <header className="font-style">
            <h5>{this.props.current.name}</h5>
          </header>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {current: state.current}
}

export default connect(mapStateToProps)(CurrentArtist)