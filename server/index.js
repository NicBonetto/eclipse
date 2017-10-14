import express from 'express'
import Spotify from 'spotify-web-api-node'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const spotify = new Spotify({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI
})

app.use(express.static(__dirname + '/public/'))

app.listen(process.env.PORT)