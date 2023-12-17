import { Component } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.scss'
})
export class CardSectionComponent {
  public productDetails = [
    {
      product: 'New Watch',
      amount: 2000,
      saving: 1000,
      icon: 'fa fa-clock-o'
    },
    {
      product: 'Play Station 5',
      amount: 2000,
      saving: 1500,
      icon: 'fab fa-playstation'
    },
    {
      product: 'Mobile',
      amount: 20000,
      saving: 12000,
      icon: 'fa fa-mobile-phone'
    },
    {
      product: 'Laptop',
      amount: 40000,
      saving: 17000,
      icon: 'fa fa-laptop'
    }
  ]
}
