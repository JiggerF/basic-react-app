var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");

// A component can have these 3:
// 1. state
// 2. lifecycle event
// 3. UI  -> minimum

// note: this project uses webpack, babel and hot reloader called webpack-dev-server


class App extends React.Component {
  render() {
    var list = ['Jigger' , 'Andrew', 'Peter'];
    return (
      <div>
        <h2> Hello World {this.props.name}</h2>
        <Child mylist={list} />
      </div>
    )
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <h3>List of Friends</h3>
        <ul>
          {this.props.mylist.map(function(result){
            return <li>{result}</li>;
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  // First param - pass our app component as a JSX
  <App name = "Jigger Fantonial 123"/>,
  // Second param - where we want our app to render to
  document.getElementById("app")
);
