import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar'
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtenderContainer from './containers/ForecastExtenderContainer';

const cities = [
  "Madrid,es",
  "Barcelona,es",
  "Buenos Aires,ar",
  "Washington,us",
  "Ciudad de México,mx"
];  

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <AppBar title="Wheater App"></AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}/>              
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  <ForecastExtenderContainer/>             
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}
export default App;