var FoodItem = React.createClass({
  render: function(){
    return (
      <li className="fooditem">{this.props.data.name} = {this.props.data.calories}</li>
    );
  }
});
