var FoodItem = React.createClass({
  render: function(){
    return (
      <article className="fooditem">
        <h1 className="fooditem__title">{this.props.data.name}</h1>
        <div>
          <p className="emoji">😊</p>
        </div>
        <div>
          <p className="fooditem__calories">{this.props.data.calories}<small>cals</small></p>
        </div>
      </article>
    );
  }
});
