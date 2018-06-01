import React, { Component } from 'react';
import WeatherList from './weather_list/weather_list_container';
import Search from './search/search_container';
import Header from './header/header';
import Chart from './chart/chart_container';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Search/>
        <Switch>
          <Route exact path = "/" component={WeatherList} />
          <Route path = "/chart" component = {Chart}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
