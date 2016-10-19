var API = function(filename, body){
  return new Promise(function(resolve, reject){
    fetch('/fake_data/' + filename + '.json', body).then(function(data){
      return data.json();
    }).then(resolve);
  });
};
