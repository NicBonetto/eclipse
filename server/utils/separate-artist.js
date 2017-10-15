function separateArtist(artist) {
  return artist.split(/(?=[A-Z])/).join(' ')
}

export default separateArtist