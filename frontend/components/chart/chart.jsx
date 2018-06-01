import React from 'react';
import {chartUtil} from '../../utils/chart_util';


class Chart extends React.Component{
  constructor(props){
    super(props);
    this.state = {update:false}
  }

  componentDidMount(){
    console.log('componentDidMount')
    //so that a rerender is forced
    this.setState({update:!this.state.update})
  }


  //componentWillReceiveProps gets called BECAUSE we are passing something as props in mapStateToProps
  //nextProps are whatever is in the mapStateToProps
  //if there are two props passed into mapStateToProps, this component will call componentWillReceiveProps twice!

  //essentially, componentWillReceiveProps is the lifecycle method where the component has access to mapStateToProps props
  //so, in componentDidMount, you make the api call to update the redux store, then we get the component connected to redux
  //in the componentWillReceiveProps method
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps',nextProps);
  }


  componentDidUpdate(){
    console.log('componentDidUpdate')
    let chart_height = 230;
    let chart_width = 600;
    let padding = 40;

    let tempData = chartUtil(this.props.weather.list);

    //if there is no svg yet, add the svg, and do all the waiting room stuff
    //the check is to see if the chart div element has any svg children;
    var y_scale = d3.scaleLinear()
      // .domain([20,d3.max(tempData,function(d){
      //   return d[1];
      // })])
      .domain([20,120])
      .range([chart_height - padding ,padding])

    var x_scale = d3.scaleLinear()
      .domain([0,d3.max(tempData,function(d){
        return d[0];
      })])
      .range([padding * 2,chart_width - padding])

    var y_axis = d3.axisLeft(y_scale)
      // .ticks(4);
    .tickValues([20,40,60,80,100,120])


    if(document.querySelector('#chart') && document.querySelector('#chart').children.length === 0){

      let svg = d3.select('#chart')
        .append('svg')
        .attr('width', chart_width)
        .attr('height', chart_height);

      svg.append('g')
        .attr('class','y-axis')
        .attr('transform','translate(' + (padding*2) + ',0)')
        .call(y_axis)

      svg.selectAll('circle')
        .data(tempData)
        .enter()
        .append('circle')
        .attr('cx', function(d){
          return x_scale(d[0])
        })
        .attr('cy',function(d){
          return y_scale(d[1]);
        })
        .attr('r','2px')
        .attr('fill','darkblue')
        .attr('stroke','blue')
        .attr('stroke-width','2')
        console.log(svg.selectAll('circle')._groups[0])

    }else{
      //for updating the graph, when user enters a new zip code: don't have to make a new svg,
      //don't have to use waiting room, we can use the circle elements that already exist
      let svg = d3.select('#chart')

      svg.selectAll('circle')
        .data(tempData)
        .transition()
        .duration(1500)
        .ease(d3.easeElasticOut)
        .attr('cy',function(d){
          return y_scale(d[1]);
        })
    }
  }

  render(){
    if(!this.props.weather.city) return null;
    return(
      <div className='chart-container'>
        {this.props.weather.city.name}, {this.props.zip}
        <div className='fahrenheit'>
            Temperature (°F)
        </div>

        <div id='chart'></div>


      </div>
    )
  }
}

export default Chart;
