import React from 'react';
import WeatherTemp from './weather_temp_item';
//five days, eight different times per day, 3 hour increments between each time

const dayTransform = str => {
  let days = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];
  let date = new Date(str);
  let dayOfWeek = days[date.getDay()];
  return dayOfWeek;
}

//2018-04-27 => Apr 27, 2018
const dateTransform = str => {
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
  let month = months[parseInt(str.slice(5,7))-1];
  return month + ' '+ str.slice(8,10) + ', ' +  str.slice(0,4)
}

export default props => {
  // console.log(props.day)
  //we might have some empty objects in the day array
  let firstDay;
  for(let i=0;i<props.day.length;i++){
    if(props.day[i].dt){
      firstDay= props.day[i];
      break;
    }
  }

  let DateString = firstDay.dt_txt.slice(0,10);
  let dayOfWeek = dayTransform(DateString);
  let date = dateTransform(DateString);

  let imageFile;
    if(firstDay.weather[0].main === 'Rain'){
      imageFile = 'https://s3.us-east-2.amazonaws.com/thelocallist/Rain2.png'
    } else if(firstDay.weather[0].main === 'Clouds'){
      imageFile = 'https://s3.us-east-2.amazonaws.com/thelocallist/Clouds2.png'
    }  else if(firstDay.weather[0].main === 'Clear'){
      imageFile = 'https://s3.us-east-2.amazonaws.com/thelocallist/Clear2.png'
    }else{
      imageFile = 'https://s3.us-east-2.amazonaws.com/thelocallist/GenericWeather2.png';
    }
  return(
    <div className='weather-day'>
      <img className='weather-icon' src={imageFile} />
      <div>
        {dayOfWeek}, <span>{date}</span>

      </div>
      <div>
        {firstDay.weather[0].description}
      </div>
      <div>
        {Math.floor(parseInt(props.day[props.day.length-2].high))}° <span className='low-temp'>{Math.floor(parseInt(props.day[props.day.length-1].low))}°</span>
      </div>
      <div className='temp-list'>

          {
            props.day.slice(0,props.day.length-2).map((object,id) => <WeatherTemp object={object} key={id}/> )
          }


      </div>
    </div>
  )
}
