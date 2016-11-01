var Food = React.createClass({
  getInitialState: function(){
    return {
      emoji: EmojiRater(this.props.data.calories)
    };
  },
  delete: function(){
    new API('entries/delete', {
      'entry-id': this.props.data.entry
    }).then(function(){
      this.props.onUpdate();
    }.bind(this));
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
        <div>
          <button onClick={this.delete}>Delete</button>
        </div>
      </article>
    );
  }
});
