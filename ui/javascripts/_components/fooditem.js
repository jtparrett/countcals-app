var FoodItem = React.createClass({
  getInitialState: function(){
    let emojis = {
      '😄': 300,
      '😁': 500,
      '😐': 700,
      '😵': 1000
    };

    let emoji = Object.keys(emojis)[0];
    Object.keys(emojis).map(function(key){
      if(this.props.data.calories >= emojis[key]){
        emoji = key;
      }
    }.bind(this));

    return { emoji: emoji };
  },
  render: function(){
    return (
      <article className="fooditem">
        <h1 className="fooditem__title">{this.props.data.name}</h1>
        <div>
          <p className="emoji">{this.state.emoji}</p>
        </div>
        <div>
          <p className="fooditem__calories">{this.props.data.calories}<small>cals</small></p>
        </div>
      </article>
    );
  }
});
