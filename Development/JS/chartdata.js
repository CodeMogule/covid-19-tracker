import Chart from 'chart.js'
import {elements} from './elements'
import axios from 'axios'








export function chart(countryName){
    const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/history',
        params: {country: `${countryName}`,day: `${new Date().toISOString().slice(0, 10)}`},
        headers: {
          'x-rapidapi-key': '499b77f963msh3c6abaaee73ee6bp130a5djsn2745a3d67ada',
          'x-rapidapi-host': 'covid-193.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          let result = response.data.response
          let totalCases = result[0].cases.total
          let totalRecovered = result[0].cases.recovered 
          let totalDeath = result[0].deaths.total
          let chartData = new Chart(elements.chart, {
            type: 'bar',
            data: {
                labels: ['TOTAL CASES', 'TOTAL RECOVERED', 'TOTAL DEATH'],
                datasets: [{
                    label: 'DATA!',
                    data: [totalCases, totalRecovered, totalDeath],
                    backgroundColor: [
                      '#7C83FD',
                      '#008000',
                      '#FF0000',
                    ],
                    borderColor: [
                        '#7C83FD',
                        '#008000',
                        '#FF0000',
                    ],
                    borderWidth: 0
                  }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    responsive:true,
                    maintainAspectRatio:false
                }
            }
        })
        
      }).catch(function (error) {
          console.error(error);
      });

}