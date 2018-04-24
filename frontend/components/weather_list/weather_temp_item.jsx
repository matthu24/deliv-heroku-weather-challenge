import React from 'react';

const timeTransform = str => {
  let timeInt = parseInt(str);
  if(timeInt === 12){
    return String(timeInt) + 'PM';
  }else if(timeInt > 12){
    return String(timeInt-12) + 'PM '
  }else{
    return String(timeInt) + 'AM ';
  }
}


export default props => {
  let temp;
  let time;
  temp = props.object.main ? String(Math.floor(parseInt(props.object.main.temp)))+'°' : null;
  time = props.object.main ? timeTransform(props.object.dt_txt.slice(11,13)) : null;
  let tempElement = temp ? (
    <div><span className='time'>{time}</span>&nbsp;&nbsp;&nbsp; {temp}</div>
  ) : (
    <div>&nbsp;</div>
  )
  return(
    <div>
      {tempElement}

    </div>
  )
}
