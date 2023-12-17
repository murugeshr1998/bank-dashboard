import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { BalanceSectionComponent } from './balance-section/balance-section.component';
import { MoneyStaticticsComponent } from './money-statictics/money-statictics.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    MainDashboardComponent,
    LeftMenuComponent,
    TopMenuComponent,
    CardSectionComponent,
    BalanceSectionComponent,
    MoneyStaticticsComponent,
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule,
    MainDashboardRoutingModule,
    FlexLayoutModule
  ]
})
export class MainDashboardModule { }
