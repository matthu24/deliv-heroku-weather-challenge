import React from 'react';
import TempChart from './chart_container';
import {chartUtil} from '../../utils/chart_util';
import {humidityUtil} from '../../utils/humidity_util';
import {pressureUtil} from '../../utils/pressure_util';


class ParentChart extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let tempData = chartUtil(this.props.weather.list);
    let humidityData = humidityUtil(this.props.weather.list);
    let pressureData = pressureUtil(this.props.weather.list);
    if(!this.props.weather.city){
      return null;
    }
    return(
      <div className='chart-container'>
        {this.props.weather.city.name}, {this.props.zip}

        <div className='upper-charts'>
          <TempChart tempData={tempData} identifier={1}/>
            <TempChart tempData={humidityData} identifier={2}/>

        </div>
        <div className='lower-chart'>

          <TempChart tempData={pressureData} identifier={3}/>
        </div>
      </div>
    )
  }
}

export default ParentChart;
