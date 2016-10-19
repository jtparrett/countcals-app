var App = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <FoodList date={new Date()} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
