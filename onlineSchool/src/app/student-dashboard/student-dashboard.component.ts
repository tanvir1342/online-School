import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor() { }
  dateTime = new Date();

  ngOnInit(): void {
    const myChart = new Chart("myChart", {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'March', 'Aprl', 'May', 'Jun'],
          datasets: [{
              label: 'Monthly Exame',
              data: [12, 19, 3, 5, 2, 60],
              backgroundColor: [
                'rgb(51, 51, 0)',
                'rgb(255, 204, 0)',
                'rgb(255, 51, 0)',
                'rgb(0, 102, 153)',
                'rgb(0, 51, 153)',
                'rgb(255, 128, 0)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });


  //2nd chart
  const chart = new Chart("2nd_chart", {
    type: 'pie',
    data: {
        labels: ['Jan', 'Feb', 'March', 'Aprl', 'May', 'Jun'],
        datasets: [{
            label: 'Monthly Exame',
            data: [12, 19, 3, 5, 2, 60],
            backgroundColor: [
                'rgb(51, 51, 0)',
                'rgb(255, 204, 0)',
                'rgb(255, 51, 0)',
                'rgb(0, 102, 153)',
                'rgb(0, 51, 153)',
                'rgb(255, 128, 0)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//3rd chart
const myChartss = new Chart("thired", {
  type: 'bar',
  data: {
      labels: ['Jan', 'Feb', 'March', 'Aprl', 'May', 'Jun'],
      datasets: [{
          label: 'Monthly Exame',
          data: [12, 19, 3, 5, 2, 60],
          backgroundColor: [
            'rgb(51, 51, 0)',
            'rgb(255, 204, 0)',
            'rgb(255, 51, 0)',
            'rgb(0, 102, 153)',
            'rgb(0, 51, 153)',
            'rgb(255, 128, 0)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});
  
  }

}
