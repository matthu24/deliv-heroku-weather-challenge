//data is state.weather.list which is an array of objects for each data point
//for each object => obj.main.temp to access temperature

export const humidityUtil = data => {
  let result = [];
  if(data){
    data.forEach((obj,i) => {
      result.push([i+1,obj.main.humidity]);
    })
  }

  // console.log(result);
  return result;
}
