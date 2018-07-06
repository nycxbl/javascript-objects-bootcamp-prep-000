
var playlist = {
  'Pokemon': 'Pokemon Song',
};

function updatePlaylist(list, artist, title) {
  Object.assign({}, list, {[artist]: title});
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
  return list;
}