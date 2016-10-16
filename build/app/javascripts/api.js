var API = function(filename){
  return new Promise(function(resolve, reject){
    var worker = new Worker('/app/javascripts/workers/api.js');
    worker.postMessage({ filename: filename });
    worker.addEventListener('message', function(e){
      resolve(e.data);
    });
  });
};
