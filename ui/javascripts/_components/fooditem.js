var FoodItem = React.createClass({
  getInitialState: function(){
    return {
      emoji: EmojiRater(this.props.data.calories)
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
