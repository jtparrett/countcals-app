var FoodList = React.createClass({
  getInitialState: function(){
    return {
      emoji: ''
    };
  },
  onSubmit: function(e){
    e.preventDefault();
    const curDate = new Date();
    let newData = {};
    Object.keys(this.refs).map(function(key){
      newData[key] = this.refs[key].value;
      this.refs[key].value = '';
    }.bind(this));
    newData["time"] = curDate.getHours() + (curDate.getMinutes() / 100);
    this.props.addFood(newData);
  },
  onChange: function(){
    this.setState({
      emoji: EmojiRater(parseInt(this.refs.calories.value))
    });
  },
  render: function(){
    return (
      <ul className="foodlist">
        {this.props.foods.map(function(food, index){
          return (
            <FoodItem data={food} key={index} />
          );
        })}

        <li className="foodlist__item">
          <form className="addfood" onSubmit={this.onSubmit}>
            <input type="text" name="name" placeholder="Add Food..." className="addfood__foodname input" ref="name" />
            <div className="emoji">{this.state.emoji}</div>
            <input type="number" name="calories" placeholder="Cals" className="input input--small" ref="calories" onChange={this.onChange} />
            <input type="submit" hidden="true" />
          </form>
        </li>
      </ul>
    );
  }
});
