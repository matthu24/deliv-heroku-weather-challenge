export const parser = data => {
  //iterate through data, and for each list item, access listItem.dt_txt indices 8 and 9
  // 9 AM, 12, 15, 18 and 21
  //ALL days MUST have 7 objects, regardless of whether or not there is data for them
  let days = [];
  let currentDate = data[0].dt_txt.slice(8,10);//should be '24'
  let currentDayArray = [];
  let lowTemp = data[0].main.temp;
  let highTemp = data[0].main.temp;
  data.forEach(object => {
    //update highs and lows
    if(object.main.temp < lowTemp){
      lowTemp = object.main.temp;
    }else if(object.main.temp > highTemp){
      highTemp = object.main.temp;
    }

    //grab the object if it's in the correct time range
    if(parseInt(object.dt_txt.slice(11,13)) < 22 && parseInt(object.dt_txt.slice(11,13)) > 8 ){
      currentDayArray.push(object);
    }

    //new day, push the currentDate into days array
    if(object.dt_txt.slice(8,10) !== currentDate){
      //if the first day does not have full day data
      while(currentDayArray.length !== 5){
        currentDayArray.unshift({})
      }
      currentDayArray.push({high:highTemp});
      currentDayArray.push({low:lowTemp})
      days.push(currentDayArray);

      lowTemp = object.main.temp;
      highTemp = object.main.temp;
      currentDate = object.dt_txt.slice(8,10);
      currentDayArray = [];
    }
  })

  //for adding the last day, keeping note that the last day might not be complete
  if(currentDayArray.length>0){
    while(currentDayArray.length!==5){
      currentDayArray.push({})
    }
    currentDayArray.push({high:highTemp});
    currentDayArray.push({low:lowTemp})
    days.push(currentDayArray);

  }

  return days;
}
