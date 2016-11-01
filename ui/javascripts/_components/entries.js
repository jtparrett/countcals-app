var Entries = React.createClass({
  getInitialState: function(){
    return {
      entries: []
    };
  },
  componentDidMount: function(){
    this.callApi(this.props.date);
  },
  update: function(){
    this.callApi(this.props.date);
  },
  componentWillReceiveProps: function(nextProps){
    this.callApi(nextProps.date);
  },
  callApi: function(date){
    new API('entries', {
      'timestamp-start': date,
      'timestamp-end': date + 86400,
    }).then(this.getFoods);
  },
  getFoods: function(res){
    var foods = [];
    if(res.data.length <= 0){
      this.setState({
        entries: foods
      });
      return false;
    }
    res.data.map(function(entry, index){
      new API('foods/get', {
        id: entry['food_id']
      }).then(function(food){
        foods[index] = {
          id: food.data.id,
          name: food.data.name,
          calories: parseInt(food.data.calories),
          time: new Date(parseInt(entry.timestamp) * 1000).getHours()
        };

        if(foods.length === res.data.length){
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
            <AddFoodForm onUpdate={this.update} />
          </li>
        </ul>
      </div>
    );
  }
});
