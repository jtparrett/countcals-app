var FoodItem = React.createClass({
  getEmojiRating: function(){
    const emojis = {
      '😄': 0,
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
    return emoji;
  },
  getInitialState: function(){
    return {
      emoji: this.getEmojiRating()
    };
  },
  render: function(){
    return (
      <li className="foodlist__item">
        <article className="fooditem">
          <h1 className="fooditem__title">{this.props.data.name}</h1>
          <div>
            <p className="emoji">{this.state.emoji}</p>
          </div>
          <div>
            <p className="fooditem__calories">{this.props.data.calories}<small>cals</small></p>
          </div>
        </article>
      </li>
    );
  }
});
