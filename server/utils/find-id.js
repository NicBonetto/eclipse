function findId(artists, name) {
  const artistList =  Array.values(artists)
  for(let artist of artistList) {
    if(artist.name === name) return artist.id
  }
}

export default findId