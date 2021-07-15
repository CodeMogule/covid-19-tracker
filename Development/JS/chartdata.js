import Chart from 'chart.js'
import {elements} from './elements'
import axios from 'axios'



const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/history',
    params: {country: 'usa'},
    headers: {
      'x-rapidapi-key': '499b77f963msh3c6abaaee73ee6bp130a5djsn2745a3d67ada',
      'x-rapidapi-host': 'covid-193.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      let test = response.data.response
      test.forEach((data) => {
          delete data.time;
          let arr = []
        let date = arr.push(data.day)
        console.log(arr)
        
      })
  }).catch(function (error) {
      console.error(error);
  });



export function chart(){
    let chartData = new Chart(elements.chart, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'TOTAL CASES',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: '#7C83FD',
    tension: 0.1
            },

            {
            label: 'TOTAL RECOVERED',
    data: [100, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: '#008000',
    tension: 0.1
            },

            {
                label: 'TOTAL DEATHS',
    data: [200, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: '#FF0000',
    tension: 0.1
            }
            
        ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
}