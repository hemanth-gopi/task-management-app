import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    
  }

  render() {
    var isAuth = document.getElementById("userdetails_is_authenticated").value;
    return (
      {!isAuth && <Login />}
      {isAuth && <Dasboard />}
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);