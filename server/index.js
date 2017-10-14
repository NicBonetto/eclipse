import express from 'express'
import Spotify from 'spotify-web-api-node'
import dotenv from 'dotenv'
import joinArtist from './utils/join-artist'

dotenv.config()
const app = express()
const spotify = new Spotify({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI
})

app.use(express.static(__dirname + '/public/'))

app.get('/spotify/search/:artist', (req, res) => {
  spotify.searchArtists(req.params.artist)
    .then(data => {
      const found = data.body.artists.items.filter(search => {
        if(search.name === artist) return search
      })
      res.json(found)
    })
})

app.listen(process.env.PORT)