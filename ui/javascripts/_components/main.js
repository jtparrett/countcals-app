var Main = React.createClass({
  getInitialState: function(){
    var now = new Date();
    return {
      date: Math.floor(new Date((now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear()).getTime() / 1000)
    };
  },
  setDate: function(date){
    this.setState({
      date: Math.floor(new Date(date).getTime() / 1000)
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
