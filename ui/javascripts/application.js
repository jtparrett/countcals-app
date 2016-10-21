var App = React.createClass({
  getInitialState: function(){
    return {
      total: 2500,
      foods: []
    };
  },
  getFoods: function(){
    new API('entries', {
      token: '123',
      start_time: this.state.start_time,
      end_time: this.state.end_time
    }).then(function(data){
      this.setState({
        foods: data
      });
    }.bind(this));
  },
  getTime: function(date){
    var curDate = (date)? new Date(date) : new Date();
    var start_time = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate());
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
    this.getTime();
    this.getFoods();
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

ReactDOM.render(<App />, document.getElementById('app'));
