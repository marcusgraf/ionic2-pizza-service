import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import 'rxjs/add/operator/toPromise';

import {Pizza, PizzaService} from '../shared/index';

@Page({
  templateUrl: 'build/+detail/detail.page.html'
})
export class DetailPage implements OnInit {
  pizza: Pizza;

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private pizzaService: PizzaService
  ) {}

  ngOnInit(): void {
    this.pizzaService
      .getPizza(this.navParams.get('id'))
      .then(pizza => {
        this.pizza = pizza
      });
  }
}
