var FoodList = React.createClass({
  render: function(){
    return (
      <ul className="foodlist">
        {this.props.foods.map(function(food, index){
          return (
            <li className="foodlist__item">
              <FoodItem data={food} key={index} />
            </li>
          );
        })}

        <li className="foodlist__item">
          <AddFood />
        </li>
      </ul>
    );
  }
});
