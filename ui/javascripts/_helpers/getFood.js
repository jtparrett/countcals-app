var GetFood = function(id){
  return new Promise(function(resolve, reject){
    new API('foods/get', {
      id: id
    }).then(resolve).catch(reject);
  });
};
