
var playlist = {
  'Pokemon': 'Pokemon Song',
};

function updatePlaylist(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
  return list;
}