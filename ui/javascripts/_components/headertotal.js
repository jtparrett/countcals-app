var HeaderTotal = React.createClass({
  getTotal: function(){
    var total = 0;
    this.props.foods.map(function(food){
      total += food.calories;
    }.bind(this));
    return total;
  },
  render: function(){
    return (
      <h1 className="header__total">{this.getTotal()}<small>cals</small></h1>
    );
  }
});
