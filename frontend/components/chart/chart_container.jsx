import React from 'react';
import {connect} from 'react-redux';
import Chart from './chart';
import {fetchAllWeather} from '../../actions/weather';

const mapStateToProps = state => ({

  weather: state.weather,
  zip: state.zip

  // zip: state.zip
})

const mapDispatchToProps = dispatch => ({
  fetchAllWeather: () => dispatch(fetchAllWeather())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart)
