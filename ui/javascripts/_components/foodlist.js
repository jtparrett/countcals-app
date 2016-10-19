var FoodList = React.createClass({
  render: function(){
    return (
      <ul className="foodlist">
        {this.props.foods.map(function(food, index){
          return (
            <li className="foodlist__item" key={index}>
              <FoodItem data={food} />
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
