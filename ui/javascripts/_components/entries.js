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
    var entries = [];
    res.data.map(function(entry){
      new GetFood(entry['food_id']).then(function(res){
        entries.push(res.data);
      });
    }.bind(this));
    this.setState({
      entries: entries
    });
  },
  render: function(){
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
