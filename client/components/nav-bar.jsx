import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <section className="row">
        <div className="col s12 pull-left">
          <div className="eclipse-nav" onClick={this.handleClick}>
            <img className="eclipse-image" src="/images/eclipse.png"/>
            <div className="nav-text">
              <Link to="/">Eclipse</Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default NavBar