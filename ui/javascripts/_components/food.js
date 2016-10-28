var Food = React.createClass({
  getInitialState: function(){
    return {
      emoji: EmojiRater(this.props.data.calories)
    };
  },
  render: function(){
    return (
      <article className="food">
        <h1 className="food__title">{this.props.data.name}</h1>
        <div>
          <p className="emoji">{this.state.emoji}</p>
        </div>
        <div>
          <p className="food__calories">{this.props.data.calories}<small>cals</small></p>
        </div>
      </article>
    );
  }
});
