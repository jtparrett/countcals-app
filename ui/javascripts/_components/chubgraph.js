var ChubGraph = React.createClass({
  componentDidUpdate:function(){
    var canvas = this.refs.canvas;
    var context = canvas.getContext('2d');
    var total = 2500;
    var y, count = 0;

    context.beginPath();
    context.moveTo(0, canvas.height);
    this.props.foods.forEach(function(food){
      count += food.calories;
      var x = food.time * (canvas.width / 24);
      y = canvas.height - (count * (canvas.height / total));
      context.lineTo(x, y);
    });
    context.lineTo(canvas.width, y);
    context.lineTo(canvas.width, canvas.height);
    context.fill();
    context.closePath();
  },
  render: function(){
    return (
      <canvas className="chubgraph" ref="canvas" width="768px" height="216px"></canvas>
    );
  }
});
