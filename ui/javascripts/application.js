var App = React.createClass({
  getInitialState: function(){
    return {
      total: 2500,
      date: '09-19-2016',
      foods: []
    };
  },
  getFoods: function(){
    new API('foods', { date: this.state.date }).then(function(data){
      this.setState({
        foods: data
      });
    }.bind(this));
  },
  addFood: function(foodData){
    this.state.foods.push(foodData);
    this.forceUpdate();
  },
  componentWillMount: function(){
    this.getFoods();
  },
  onChange: function(event){
    this.setState({
      date: event.target.value
    });
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
