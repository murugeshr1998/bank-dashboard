import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CardSectionComponent } from './card-section/card-section.component';


@NgModule({
  declarations: [
    MainDashboardComponent,
    LeftMenuComponent,
    TopMenuComponent,
    CardSectionComponent
  ],
  imports: [
    CommonModule,
    MainDashboardRoutingModule
  ]
})
export class MainDashboardModule { }
