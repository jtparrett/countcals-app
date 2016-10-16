self.addEventListener('message', function(e){
  fetch('/data/' + e.data.filename + '.json').then(function(data){
    return data.json();
  }).then(function(data){
    self.postMessage(data);
    self.close();
  });
}, false);
