var Main = React.createClass({
  getInitialState: function(){
    return {
      total: 2500,
      token: false,
      foods: []
    };
  },
  getFoods: function(){
    new API('entries', {
      token: this.state.token,
      timestamp_start: this.state.start_time,
      timestamp_end: this.state.end_time
    }).then(function(data){
      this.setState({
        foods: data
      });
    }.bind(this));
  },
  auth: function(callback){
    new API('auth', {
      username: 'guest',
      password: 1234
    }).then(function(data){
      this.setState({
        token: data.data
      });
      callback();
    }.bind(this));
  },
  getTime: function(date){
    var curDate = (date)? new Date(date) : new Date();
    var start_time = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate()).getTime();
    var end_time = start_time + 86400;
    this.setState({
      start_time: start_time / 1000,
      end_time: end_time / 1000
    });
  },
  addFood: function(data){
    this.state.foods.push(data);
    this.forceUpdate();
  },
  componentWillMount: function(){
    this.auth(function(){
      this.getTime();
      this.getFoods();
    }.bind(this));
  },
  onChange: function(event){
    this.getTime(event.target.value);
    this.getFoods();
  },
  render: function(){
    return (
      <div className="page">
        <nav className="nav">
          <DateSelect onChange={this.onChange} />
        </nav>

        <header className="header">
          <ChubGraph foods={this.state.foods} total={this.state.total} />
          <HeaderTotal foods={this.state.foods} />
        </header>

        <FoodList foods={this.state.foods} addFood={this.addFood} />
      </div>
    );
  }
});
