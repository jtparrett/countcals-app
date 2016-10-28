var Entries = React.createClass({
  getInitialState: function(){
    return {
      entries: []
    };
  },
  componentWillMount: function(){
    new API('entries', {
      'timestamp-start': 0,
      'timestamp-end': 200,
    }).then(this.getFoods);
  },
  getFoods: function(res){
    res.data.map(function(entry){
      this.addFood({
        id: entry['food_id']
      });
    }.bind(this));
  },
  addFood: function(res){
    var entries = this.state.entries;
    new GetFood(res.id).then(function(res){
      entries.push(res);
    }.bind(this));
    this.setState({
      entries: entries
    });
  },
  render: function(){
    return (
      <div>
        <header className="header">
          <ChubGraph entries={this.state.entries} />
          <HeaderTotal entries={this.state.entries} />
        </header>

        <ul className="entries">
          {this.state.entries.map(function(food, index){
            return (
              <li className="entries__item" key={index}>
                <Food data={food} />
              </li>
            );
          })}
          <li className="entries__item">
            <AddFoodForm addFood={this.addFood} />
          </li>
        </ul>
      </div>
    );
  }
});
