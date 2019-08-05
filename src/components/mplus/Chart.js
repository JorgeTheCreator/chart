import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
  state = {
    type: 'line',
    chartData: {
      datasets: [
        {
          label: 'New M+ Visitors',
          data: [{ x: '2016-12-25', y: 25 }, { x: '2016-12-26', y: 10 }],
          label: 'New M+ Visitors',
          options: {
            scales: {
              xAxes: [
                {
                  barPercentage: 0.5,
                  barThickness: 6,
                  maxBarThickness: 8,
                  minBarLength: 2,
                  gridLines: {
                    offsetGridLines: true
                  }
                },
                {
                  type: 'time',
                  time: {
                    unit: 'month'
                  }
                }
              ],
              yAxes: [
                {
                  stacked: true
                }
              ]
            }
          },
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    }
  };
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={250}
          height={250}
          options={{
            maintainAspectRatio: false,
            legend: { position: 'top' }
          }}
        />
      </div>
    );
  }
}

export default Chart;
