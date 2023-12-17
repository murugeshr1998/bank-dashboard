import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {
  public accountData:any;
  public transactions:any;
  public selectedData:any;
  public popup = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getData().subscribe(res => this.accountData = res);
    this.transactions = this.accountData.transactions;
  }

  showData(id: any){
    for(let i = 0; i < this.transactions.length; i++) {
      if(id == this.transactions[i].id){
        this.selectedData = this.transactions[i];
      }
    }
    this.popup = true;
  }
}
