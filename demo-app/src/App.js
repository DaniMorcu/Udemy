import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

// step 1
import { simpleAction } from './actions/simpleAction';

class App extends Component {
  // step 6
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* step 5 and step 7*/}
          <pre>
          {
            JSON.stringify(this.props)
          }
          </pre>
          <button onClick={this.simpleAction}>Test redux action</button>  
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// step 2
const mapStateToProps = state => ({
  ...state
});

// step 3
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

// step 4
export default connect(mapStateToProps, mapDispatchToProps)(App);
