
var playlist = {
  'Pokemon': 'Pokemon Song',
};

function updatePlaylist(list, artist, title) {
  return list[artist] = title;
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
  return list;
}