import React, {Component} from "react";
import Chart from 'react-apexcharts'
import "./Crescimento.css";

class Crescimento extends Component {
    
    constructor(props) {
      super(props);
  
      this.state = {
        series: [{
            name: "Ganhos",
            data: [210, 250, 120, 200, 120, 210]
        }],
        options: {
          chart: {
            height: 200,
            tipe: 'line',
            zoom: {
                enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 5,
            curve: 'smooth',
          },
          title: {
            text: 'Crescimento',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#fff', 'transparent'],
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
          }
        },
      }
    }

    render() {
      return (
          <div className="Crescimento">
              <Chart options={this.state.options} series={this.state.series} type="line" height={256} />
          </div>
      )
    }
  }

export default Crescimento;
