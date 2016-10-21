var API = function(filename, body){
  return new Promise(function(resolve, reject){
    fetch('http://localhost:8000/api/' + filename, { method: 'POST', data: body, mode: 'cors' }).then(function(data){
      return data.json();
    }).then(resolve);
  });
};
