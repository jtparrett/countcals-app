var Entries = React.createClass({
  getInitialState: function(){
    return {
      entries: []
    };
  },
  componentWillMount: function(){
    this.callApi();
  },
  callApi: function(){
    new API('entries', {
      'timestamp-start': this.props.date,
      'timestamp-end': this.props.date + 86400,
    }).then(this.getFoods);
  },
  getFoods: function(res){
    var foods = [];
    res.data.map(function(entry, index){
      new GetFood(entry['food_id']).then(function(food){
        foods.push({
          id: 1,
          name: 'test',
          calories: parseInt(food.calories)
        });
      });
    }.bind(this));
    this.setState({
      entries: foods
    });
  },
  render: function(){
    console.log(this.state.entries);
    return (
      <div>
        <header className="header">
          <ChubGraph entries={this.state.entries} total="2500" />
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
            <AddFoodForm onUpdate={this.callApi} />
          </li>
        </ul>
      </div>
    );
  }
});
