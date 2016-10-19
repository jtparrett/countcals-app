var App = React.createClass({
  getInitialState: function(){
    return {
      foods: []
    };
  },
  componentWillMount: function(){
    new API('foods', { date: '2016-19-09' }).then(function(data){
      this.setState({
        foods: data
      });
    }.bind(this));
  },
  render: function(){
    return (
      <div className="page">
        <header className="header">
          <HeaderTotal foods={this.state.foods} />
          <ChubGraph foods={this.state.foods} />
        </header>
        <FoodList foods={this.state.foods} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
