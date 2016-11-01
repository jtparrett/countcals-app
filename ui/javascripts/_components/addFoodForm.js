var AddFoodForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    let data = {
      timestamp: new Date().getTime()
    };
    for(key in this.refs){
      data[key] = this.refs[key].value;
      this.refs[key].value = '';
    }
    new API('foods/add', data).then(function(res){
      this.props.addFood(res);
    }.bind(this));
  },
  render: function(){
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="name" placeholder="Food Name" />
        <input type="number" ref="calories" placeholder="Food Cals" />
        <input type="submit" />
      </form>
    );
  }
});
