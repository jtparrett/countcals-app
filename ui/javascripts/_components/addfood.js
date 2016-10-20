var AddFood = React.createClass({
  render: function(){
    return (
      <div className="addfood">
        <input type="text" name="foodname" placeholder="Add Food..." className="addfood__foodname input" />
        <input type="text" name="calories" placeholder="Cals" className="input input--small" />
        <input type="submit" className="button" value="Add" />
      </div>
    );
  }
});
