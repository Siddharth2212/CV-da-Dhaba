import { Component, OnInit } from '@angular/core';
import {DishService} from '../services/dish.service';
import {PromotionService} from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dish;
  promotion;

  constructor(private dishService: DishService, private promotionService: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
    console.log(this.dish);
    console.log(this.promotion);
  }

}