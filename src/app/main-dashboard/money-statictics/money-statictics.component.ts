import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-money-statictics',
  templateUrl: './money-statictics.component.html',
  styleUrl: './money-statictics.component.scss'
})
export class MoneyStaticticsComponent {
  public accountData:any;
  public moneyStats:any;
  public chart: any;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getData().subscribe(res => this.accountData = res);
    this.moneyStats = this.accountData.money_statistics;
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec' ], 
	       datasets: [
          {
            label: "Income",
            data: ['35','30', '40', '25', '34', '41', '48', '23', '32', '35', '28', '26'],
            backgroundColor: '#738580'
          },
          {
            label: "Investment",
            data: ['5', '3', '7', '2', '4', '8', '10', '5', '7', '8', '3', '2'],
            backgroundColor: '#696969'
          },
          {
            label: "Expense",
            data: ['30', '27', '33', '23', '30', '33', '38', '18', '25', '27', '25', '24'],
            backgroundColor: '#647C90'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
