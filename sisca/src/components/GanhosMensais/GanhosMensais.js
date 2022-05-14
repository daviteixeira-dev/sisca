import React, {Component} from "react";
import Chart from 'react-apexcharts'
import "./GanhosMensais.css";

class GanhosMensais extends Component {
    
    constructor(props) {
      super(props);
  
      this.state = {
        series: [{
            name: "Ganhos",
            data: ['250', '110', '190', '140', '120', '180', '230', '110', '180', '250', '100', '180', '150', '240']
        }],
        options: {
          chart: {
            height: 200,
            tipe: 'bar',
            zoom: {
                enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          title: {
            text: 'Ganhos Mensais',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#fff', 'transparent'],
              opacity: 0.5
            },
          },
          xaxis: {
            categories: [2, 4 , 6, 8 , 10, 12, 14, 16, 18, 20, 22, 24, 28, 30]
          }
        },
      }
    }

    render() {
      return (
          <div className="GanhosMensais">
              <Chart options={this.state.options} series={this.state.series} type="bar" height={256} />
          </div>
      )
    }
  }

export default GanhosMensais;
