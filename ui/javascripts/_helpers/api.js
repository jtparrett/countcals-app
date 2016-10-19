var API = function(filename, body){
  return new Promise(function(resolve, reject){
    var worker = new Worker('/app/javascripts/workers/api.js');
    worker.postMessage({ filename: filename, body: body });
    worker.addEventListener('message', function(e){
      resolve(e.data);
    });
  });
};
