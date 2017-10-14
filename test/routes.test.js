import { describe, it } from 'mocha'
import { expect } from 'chai'
import request from 'request'

describe('index.js', () => {
  describe('GET /authorize', () => {
    it('Retrieves Spotify access tokens.', done => {
      request('http://localhost:3000/authorize' ,(err, res, body) => {
        if(err) console.log(err)
        expect(res.statusCode).to.equal(200)
        done()
      })
    })
  })
  describe('GET /spotify/search/:artist', () => {
    it('Retrieves an array of objects with artist info.', done => {
      request('http://localhost:3000/spotify/search/Ben+Howard', (err, res, body) => {
        if(err) console.log(err)
        expect(body).to.equal('[]')
        done()
      })
    })
  })
})