// // TODO
// var App = () => (
//   <div>Some cliche salutation</div>
// );

// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));

// var ColdBrew = () => (
//   <li>ColdBrew</li>
// )

// var Eggs = () => (
//   <li>Eggs</li>
// )

class GroceryListItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onListItemMouseOver () {
    this.setState({
      hover: !this.state.hover
    });
  }

  render () {
    var style = {
      textDecoration: this.state.done ? 'hover' : 'none'
    };

    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.groceryItem}</li>
    )
  }
}

var GroceryList = (props) => (
  <ul>
    {props.list.map(item => <GroceryListItem groceryItem={item} />)}
  </ul>
);




var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList list={['Eggs', 'Cold Brew']}/>
  </div>
);

ReactDOM.render(<App/>, document.getElementById("app"));
