var FoodList = React.createClass({
  getInitialState: function(){
    return {
      foods: ['']
    };
  },
  componentWillMount: function(){
    new API('foods', { date: this.props.date }).then(function(data){
      this.setState({
        foods: data
      });
    }.bind(this));
  },
  render: function(){
    return (
      <ul>
        {this.state.foods.map(function(food, index){
          return <FoodItem data={food} key={index} />;
        })}
      </ul>
    );
  }
});
