var FoodItem = React.createClass({
  render: function(){
    return (
      <li>{this.props.data.name} = {this.props.data.calories}</li>
    );
  }
});
