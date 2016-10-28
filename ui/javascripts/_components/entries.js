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
    let entries = [];
    res.data.map(function(entry){
      new API('foods/get', {
        id: entry['food_id']
      }).then(function(res){
        entries.push(res);
      });
    });
    this.setState({ entries: entries });
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
        </ul>
      </div>
    );
  }
});
