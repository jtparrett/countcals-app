var Main = React.createClass({
  getInitialState: function(){
    var now = new Date();
    return {
      date: new Date(now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear()).getTime()
    };
  },
  setDate: function(date){
    this.setState({
      date: new Date(date).getTime()
    });
  },
  render: function(){
    return (
      <div className="page">
        <nav className="nav">
          <DateSelect setDate={this.setDate} />
        </nav>

        <Entries date={this.state.date} />
      </div>
    );
  }
});
