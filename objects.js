
var playlist = {
  'Pokemon': 'Pokemon Song',
};

function updatePlaylist(list, artist, title) {
  return Object.assign({}, {artist: title});
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
  return list;
}