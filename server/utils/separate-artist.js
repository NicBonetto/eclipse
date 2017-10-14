function joinArtist(artist) {
  return artist.split(/(?=[A-Z])/).join(' ')
}

export default joinArtist