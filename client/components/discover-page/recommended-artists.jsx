import React from 'react'
import Store from '../../store'

const joinSearch = name => {
  return name.split(' ').join('+')
}

const handleClick = e => {
  e.preventDefault()
  Store.dispatch({ type: 'CLEAR_CURRENT_ARTIST' })
  Store.dispatch({ type: 'CLEAR_ARTISTS' })
  Store.dispatch({ type: 'CLEAR_SONGS' })
  const artist = joinSearch(e.target.innerHTML)
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
}

const recommended = name => pic => {
  return (
    <section className="recommended-box">
      <div className="shifter">
        <div className="center-align">
          <div className="img-container">
            <img className="image-bubble-sm" src={pic}/>
          </div>
          <div>
            <header className="artist-text">
              <h6 onClick={handleClick}>{name}</h6>
            </header>
          </div>
        </div>
      </div>
    </section>
  )
}

export default recommended
