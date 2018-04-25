import React, { Component } from 'react';
import WeatherList from './weather_list/weather_list_container';
import Search from './search/search_container';
import Header from './header/header';
import Footer from './footer/footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Search/>
        <WeatherList/>
        <Footer/>
      </div>
    );
  }
}
