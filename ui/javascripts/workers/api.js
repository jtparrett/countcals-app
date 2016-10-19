self.addEventListener('message', function(e){
  fetch('/fake_data/' + e.data.filename + '.json', e.data.body).then(function(data){
    return data.json();
  }).then(function(data){
    self.postMessage(data);
    self.close();
  });
}, false);
