import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-balance-section',
  templateUrl: './balance-section.component.html',
  styleUrl: './balance-section.component.scss'
})
export class BalanceSectionComponent {

  public accountData:any;
  public balanceData:any;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getData().subscribe(res => this.accountData = res);
    this.balanceData = this.accountData.balance;
  }
}
