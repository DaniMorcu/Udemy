import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar'
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  "Madrid,es",
  "Barcelona,es",
  "Buenos Aires,ar",
  "Washington,us",
  "Ciudad de México,mx"
];
class App extends Component {

  constructor(){
    super();
    this.state = { city: null }
  }

  handleSelectedLocation = city => {
    this.setState({city});
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <AppBar title="Wheater App"></AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
              onSelectedLocation={this.handleSelectedLocation}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  {
                    city && 
                    <ForecastExtended city={city}></ForecastExtended>                    
                  }                  
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
