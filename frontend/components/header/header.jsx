import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div className='header'>
        <img className='header-img' src='https://s3.us-east-2.amazonaws.com/thelocallist/WeatherHeader.png'/>
        <h1>Weather Fetchers</h1>
      </div>
    )
  }
}

export default Header;
