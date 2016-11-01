var DateSelect = React.createClass({
  setDate: function(){
    this.props.setDate(this.refs.select.value);
  },
  render: function(){
    return (
      <div className="date-select">
        <select onChange={this.setDate} ref="select">
          <option>09-19-2016</option>
          <option>09-20-2016</option>
        </select>
      </div>
    );
  }
});
