var Login = React.createClass({
  auth: function(data){
    new API('auth', data).then(function(res){
      CC.token = res.data;
      localStorage.setItem('API_TOKEN', res.data);
    });
  },
  onSubmit: function(e){
    e.preventDefault();
    var data = {};
    for(key in this.refs){
      data[key] = this.refs[key].value;
    }
    this.auth(data);
  },
  render: function(){
    return (
      <div className="page">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="username" placeholder="username" />
          <input type="password" ref="password" placeholder="password" />
          <input type="submit" />
        </form>
      </div>
    );
  }
});
