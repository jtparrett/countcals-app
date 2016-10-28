var Main = React.createClass({
  render: function(){
    return (
      <div className="page">
        <nav className="nav">
          <DateSelect />
        </nav>

        <Entries />
      </div>
    );
  }
});
