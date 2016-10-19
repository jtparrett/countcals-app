var ChubGraph = React.createClass({
  componentDidMount:function(){
    var canvas = this.refs.canvas;
    var context = canvas.getContext('2d');
    context.fillRect(0, 0, 100, 100);
  },
  render: function(){
    return (
      <canvas ref="canvas"></canvas>
    );
  }
});
