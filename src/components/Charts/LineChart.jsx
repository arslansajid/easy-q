import React from 'react';
import Chart from 'chart.js';

export default class ListingChart extends React.Component {
  componentDidMount() {
    var ctx = document.getElementById("myChart");
    this.myChart = new Chart(ctx, {
      responsive: true,
      type: 'line',
      data: {
        labels: this.props.labels,
        datasets: [{
          data: this.props.data,
          label: 'Trends',
          lineTension: 0,
          fill: false,
          // backgroundColor: '#b2dfdb',
          // hoverBackgroundColor: '#26a69a',

          backgroundColor: ['#172a50', '#ef5350'],
          hoverBackgroundColor: ['#26a69a', '#de4240'],
        }]
      },
      options: {
        legend: {
          display: false
         },
         tooltips: {
           borderColor: '#202020',
           borderWidth: 2,
           backgroundColor: '#fafafa',
           cornerRadius:2,
           yPadding:10,
           bodyFontColor: '#0f0f0f'
         },
        scales: {
          yAxes: [{
            display:true,
            gridLines: {
              display: true
            },
            ticks: {
              display: true,
              maxTicksLimit: 3,
            }
          }],
          xAxes: [{
            gridLines: {
              display:true
            },
            categoryPercentage: 1.0,
            barPercentage: 0.7,
          }],
        }
      }
    })
  }
  componentWillReceiveProps(nextProps) {
    this.myChart.data.datasets[0].data = nextProps.data;
    this.myChart.update();
  }
  render() {
    return (
      <canvas className={this.props.className} id="myChart"></canvas>
    )
  }
}
