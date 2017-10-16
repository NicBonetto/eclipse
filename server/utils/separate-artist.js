function separateArtist(artist) {
  return artist.split(/[+]/g).join(' ')
}

export default separateArtist