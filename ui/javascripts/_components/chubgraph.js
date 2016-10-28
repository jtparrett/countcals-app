var ChubGraph = React.createClass({
  componentDidUpdate:function(){
    let canvas = this.refs.canvas;
    let context = canvas.getContext('2d');
    let y, count = 0;

    context.beginPath();
    context.moveTo(0, canvas.height);
    this.props.entries.map(function(food){
      let x = food.time * (canvas.width / 24);
      count += food.calories;
      y = canvas.height - (count * ((canvas.height / 2) / this.props.total));
      context.lineTo(x, y);
    });
    context.lineTo(canvas.width, y);
    context.lineTo(canvas.width, canvas.height);
    context.fill();
    context.closePath();
  },
  render: function(){
    return (
      <canvas className="chubgraph" ref="canvas" width="768px" height="432px"></canvas>
    );
  }
});
