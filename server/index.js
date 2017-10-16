import express from 'express'
import Spotify from 'spotify-web-api-node'
import dotenv from 'dotenv'
import separateArtist from './utils/separate-artist'
import findId from './utils/find-id'

dotenv.config()
const app = express()
const spotify = new Spotify({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI
})

app.use(express.static(__dirname + '/public/'))

app.get('/authorize', (req, res) => {
  spotify.clientCredentialsGrant()
    .then(data => {
      spotify.setAccessToken(data.body['access_token'])
      res.sendStatus(200)
    })
})

app.get('/spotify/search/:artist', (req, res) => {
  const artist = separateArtist(req.params.artist)
  spotify.searchArtists(artist)
    .then(data => {
      const found = data.body.artists.items.filter(search => {
        if(search.name === artist) return search
      })
      res.json(found)
    })
})

app.get('/spotify/recommended/:artist', (req, res) => {
  const artist = separateArtist(req.params.artist)
  spotify.searchArtists(artist)
    .then(data => {
      spotify.getArtistRelatedArtists(findId(data.body.artists.items, separateArtist(req.params.artist)))
        .then(recommend => {
          const artists = recommend.body.artists
            .map(artist => {
              return {name: artist.name, pic: artist.images[0].url}
            })
          res.json(artists)
        })
    })
})

app.get('/spotify/songs/:artist', (req, res) => {
  const artist = separateArtist(req.params.artist)
  spotify.searchTracks('artist:' + artist)
    .then(data => data.body.tracks.items)
    .then(list => {
      const sources = [
        {name: list[0].name, href: list[0].preview_url},
        {name: list[1].name, href: list[1].preview_url},
        {name: list[2].name, href: list[2].preview_url}
      ]
      res.json(sources)
    })
})

app.listen(process.env.PORT)