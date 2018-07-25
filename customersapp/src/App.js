import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';
import CustomersContainer from './containers/CustomersContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';
import LoginContainer from './containers/LoginContainer';
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer}></Route>
          <Route path="/login" component={LoginContainer}></Route>
          <Route exact path="/customers" component={CustomersContainer}></Route>
          <Switch>
            <Route path="/customers/new" component={NewCustomerContainer}></Route>
            <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
