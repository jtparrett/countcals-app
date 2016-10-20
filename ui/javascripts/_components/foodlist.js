var FoodList = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    const curDate = new Date();
    this.props.addFood({
      "name": this.refs.foodname.value,
      "calories": parseInt(this.refs.calories.value),
      "time": curDate.getHours() + curDate.getMinutes() / 100
    });
  },
  render: function(){
    return (
      <ul className="foodlist" ref="foodlist">
        {this.props.foods.map(function(food, index){
          return (
            <FoodItem data={food} key={index} />
          );
        })}

        <li className="foodlist__item">
          <form className="addfood" ref="addfood-form" onSubmit={this.onSubmit}>
            <input type="text" name="foodname" placeholder="Add Food..." className="addfood__foodname input" ref="foodname" />
            <input type="text" name="calories" placeholder="Cals" className="input input--small" ref="calories" />
            <input type="submit" className="button" value="Add" />
          </form>
        </li>
      </ul>
    );
  }
});
