
var playlist = {
  'Pokemon': 'Pokemon Song',
};

function updatePlaylist(list, artist, title) {
  returnObject.assign({}, list, {[artist]: title});
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
  return list;
}