var FoodList = React.createClass({
  render: function(){
    return (
      <ul className="foodlist">
        {this.props.foods.map(function(food, index){
          return <FoodItem data={food} key={index} />;
        })}
      </ul>
    );
  }
});
