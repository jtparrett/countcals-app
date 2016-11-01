var DateSelect = React.createClass({
  setDate: function(){
    this.props.setDate(this.refs.date.value);
  },
  render: function(){
    return (
      <div className="date-select">
        <input type="date" ref="date" onChange={this.setDate} />
      </div>
    );
  }
});
