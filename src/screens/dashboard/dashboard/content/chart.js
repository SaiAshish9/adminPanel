import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: 1.5,
          colors: [props.color],
        },
        fill: {
          colors: [props.bg],
        },
        tooltip: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        states: {
          hover: {
            filter: {
              type: "none",
            },
          },
        },
      },
      series: [
        {
          name: "series-1",
          data: props.data,
        },
      ],
    };
  }
  render() {
    const { height } = this.props;
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="area"
        width={"100%"}
        height={height}
        style={{ position: "relative", zIndex: 0 }}
      />
    );
  }
}

export default App;
