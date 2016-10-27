var CC = window.CC || {};
CC.token = localStorage.getItem('API_TOKEN');
new API('auth', {
  token: CC.token
}).then(function(){
  ReactDOM.render(<Main />, document.getElementById('app'));
}).catch(function(){
  ReactDOM.render(<Login />, document.getElementById('app'));
});
