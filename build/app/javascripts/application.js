var API = function (filename) {
  return new Promise(function (resolve, reject) {
    var worker = new Worker('/app/javascripts/workers/api.js');
    worker.postMessage({ filename: filename });
    worker.addEventListener('message', function (e) {
      resolve(e.data);
    });
  });
};
var App = React.createClass({
  render: function () {
    return React.createElement(
      'div',
      null,
      'Hello World!'
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
self.addEventListener('message', function (e) {
  fetch('/data/' + e.data.filename + '.json').then(function (data) {
    return data.json();
  }).then(function (data) {
    self.postMessage(data);
    self.close();
  });
}, false);
