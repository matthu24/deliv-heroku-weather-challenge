import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class Search extends React.Component{
  constructor(props){
    super(props);
    this.state={zip:'95035',nav: 'forecast'}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.chartSwitch = this.chartSwitch.bind(this);
    this.forecastSwitch = this.forecastSwitch.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllWeather(this.state.zip);
    this.props.storeZip(this.state.zip);
  }

  onChange(field){
    return(e) => {
      this.setState({[field]:e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    //fire post request
    this.props.fetchAllWeather(this.state.zip);
    this.props.storeZip(this.state.zip);
    this.setState({zip: ''})
  }

  chartSwitch(){
    this.setState({nav:'chart'})
  }

  forecastSwitch(){
    this.setState({nav:'forecast'})

  }

  render(){
    return(
      <div className='search-container'>
        <form onSubmit={this.handleSubmit}>

          <input value={this.state.zip} onChange={this.onChange('zip')} className='search' placeholder='Search by zip code'></input>
          <input className = 'submit' type='submit'></input>
        </form>
        <div className='nav'>
          <Link onClick={this.forecastSwitch} className={this.state.nav === 'forecast' ? 'selected' : 'not-selected'} to="/">Five Day Forecast</Link>

          <Link onClick={this.chartSwitch} className={this.state.nav === 'chart' ? 'selected' : 'not-selected'} to="/chart">Temperature Charts</Link>
            <hr></hr>

        </div>

      </div>
    )
  }
}

export default Search;
