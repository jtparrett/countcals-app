var App = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <FoodList date={'2016-10-19'} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
