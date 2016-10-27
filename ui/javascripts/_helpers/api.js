var API = function(filename, data){
  var endpoint = new URL('http://138.68.149.32/api/' + filename);
  Object.keys(data).forEach(key => endpoint.searchParams.append(key, data[key]));
  return new Promise(function(resolve, reject){
    fetch(endpoint).then(function(data){
      return data.json();
    }).then(function(data){
      if(data.success){
        resolve(data);
      } else {
        reject(data);
      }
    });
  });
};
