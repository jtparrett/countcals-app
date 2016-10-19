var HeaderTotal = React.createClass({
  render: function(){
    var total = 0;
    this.props.foods.map(function(food){
      total += food.calories;
    });
    return (
      <h1 className="header__total">{total}<small>cals</small></h1>
    );
  }
});
