
var playlist = {
  'Pokemon': 'Pokemon Song',
}

function updatePlaylist(list, artist, title) {
  list[artist] = title;
  return list;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}