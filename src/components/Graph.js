import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';

const Graph = ({ finance }) => {
  const [myChart, setMyChart] = useState();

  const getDataset = () => {
    return {
      labels: ['Estimated Cost', 'Estimated Cost'],
      datasets: [
        {
          data: finance,
          backgroundColor: '#63dcfa',
          borderColor: '#17a2b8',
        },
      ],
    };
  };

  const loadGraph = () => {
    setMyChart(
      new Chart(document.getElementById('chart'), {
        type: 'bar',
        data: getDataset(),
        options: {
          tooltips: {
            enabled: false,
          },
          hover: {
            animationDuration: 0,
          },
          animation: {
            duration: 1,
            onComplete: function () {
              var chartInstance = this.chart,
                ctx = chartInstance.ctx;

              ctx.font = Chart.helpers.fontString(
                Chart.defaults.global.defaultFontSize,
                Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily
              );
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';

              this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                  var data = dataset.data[index];
                  ctx.fillText(`$${data}`, bar._model.x, bar._model.y - 5);
                });
              });
            },
          },
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          responsive: true,
          scales: {
            xAxes: [{}],
            yAxes: [
              {
                ticks: {
                  max:
                    Math.max(...getDataset().datasets[0].data) > 100
                      ? Math.max(...getDataset().datasets[0].data) +
                        getDataset().datasets[0].data[0]
                      : Math.max(...getDataset().datasets[0].data),
                  beginAtZero: true,
                  callback: function (value, index, values) {
                    if (value > 1000) {
                      return '$' + value / 1000 + 'k';
                    } else {
                      return '$' + value;
                    }
                  },
                },
              },
            ],
          },
        },
      })
    );
  };

  useEffect(() => {
    loadGraph();
  }, []);

  useEffect(() => {
    if (myChart) {
      myChart.destroy();
      loadGraph();
    }
  }, [finance]);

  return (
    <>
      <canvas id="chart"></canvas>
    </>
  );
};

const mapStateToProps = state => ({
  finance: state.calculator.finance,
});

export default connect(mapStateToProps)(Graph);
