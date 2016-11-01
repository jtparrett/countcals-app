var Entries = React.createClass({
  getInitialState: function(){
    return {
      entries: [],
      date: this.props.date
    };
  },
  componentDidMount: function(){
    this.callApi();
  },
  callApi: function(){
    new API('entries', {
      'timestamp-start': this.props.date,
      'timestamp-end': this.props.date + 86400,
    }).then(this.getFoods);
  },
  getFoods: function(entries){
    var foods = [];
    entries.data.map(function(entry, index){
      new API('foods/get', {
        id: entry['food_id']
      }).then(function(food){
        foods[index] = {
          id: food.data.id,
          name: food.data.name,
          calories: parseInt(food.data.calories),
          time: new Date(parseInt(entry.timestamp)).getHours()
        };

        if(foods.length === entries.data.length){
          this.setState({
            entries: foods
          });
        }
      }.bind(this));
    }.bind(this));
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
